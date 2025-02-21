import { slugifyWithCounter } from '@sindresorhus/slugify'
import * as acorn from 'acorn'
import { toString } from 'mdast-util-to-string'
import { mdxAnnotations } from 'mdx-annotations'
import shiki from 'shiki'
import { visit } from 'unist-util-visit'

function rehypeParseCodeBlocks() {
  return (tree) => {
    visit(tree, 'element', (node, _nodeIndex, parentNode) => {
      if (node.tagName === 'code') {
        parentNode.properties.language = node.properties.className
          ? node.properties?.className[0]?.replace(/^language-/, '')
          : 'txt'
      }
    })
  }
}

let highlighter

function rehypeShiki() {
  return async (tree) => {
    highlighter =
      highlighter ?? (await shiki.getHighlighter({ theme: 'css-variables' }))

    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
        let codeNode = node.children[0]
        let textNode = codeNode.children[0]

        node.properties.code = textNode.value

        if (node.properties.language) {
          let tokens = highlighter.codeToThemedTokens(
            textNode.value,
            node.properties.language,
          )

          textNode.value = shiki.renderToHtml(tokens, {
            elements: {
              pre: ({ children }) => children,
              code: ({ children }) => children,
              line: ({ children }) => `<span>${children}</span>`,
            },
          })
        }
      }
    })
  }
}

function rehypeSlugify() {
  return (tree) => {
    let slugify = slugifyWithCounter()
    visit(tree, 'element', (node) => {
      if (node.tagName === 'h2' && !node.properties.id) {
        node.properties.id = slugify(toString(node))
      }
    })
  }
}

function rehypeAddMDXExports(getExports) {
  return (tree) => {
    let exports = Object.entries(getExports(tree))

    for (let [name, value] of exports) {
      for (let node of tree.children) {
        if (
          node.type === 'mdxjsEsm' &&
          new RegExp(`export\\s+const\\s+${name}\\s*=`).test(node.value)
        ) {
          return
        }
      }

      let exportStr = `export const ${name} = ${value}`

      tree.children.push({
        type: 'mdxjsEsm',
        value: exportStr,
        data: {
          estree: acorn.parse(exportStr, {
            sourceType: 'module',
            ecmaVersion: 'latest',
          }),
        },
      })
    }
  }
}

function getSections(node) {
  let sections = []

  for (let child of node.children ?? []) {
    if (child.type === 'element' && child.tagName === 'h2') {
      sections.push(`{
        title: ${JSON.stringify(toString(child))},
        id: ${JSON.stringify(child.properties.id)},
        ...${child.properties.annotation}
      }`)
    } else if (child.children) {
      sections.push(...getSections(child))
    }
  }

  return sections
}

function rehypeAddLastModified() {
  // This function adds a lastModified export to the tree if it exists, or sets it to the current date if it doesn't.
  // It also formats the date to be in the format YYYY-MM-DD.
  // It is accessible in a page as {lastModified}.
  // The original value is set by the remark-modified-time plugin.
  return (tree, file) => {
    const lastModified = file.data.lastModified;
    if (lastModified) {
      const exportStr = `export const lastModified = "${lastModified.split('T')[0]}";`;
      tree.children.push({
        type: 'mdxjsEsm',
        value: exportStr,
        data: {
          estree: acorn.parse(exportStr, {
            sourceType: 'module',
            ecmaVersion: 'latest',
          }),
        },
      });
    } else {
      const now = new Date().toISOString().split('T')[0];
      const exportStr = `export const lastModified = "${now}";`;
      tree.children.push({
        type: 'mdxjsEsm',
        value: exportStr,
        data: {
          estree: acorn.parse(exportStr, {
            sourceType: 'module',
            ecmaVersion: 'latest',
          }),
        },
      });
    }
  };
}

export const rehypePlugins = [
  mdxAnnotations.rehype,
  rehypeParseCodeBlocks,
  rehypeShiki,
  rehypeSlugify,
  [
    rehypeAddMDXExports,
    (tree) => ({
      sections: `[${getSections(tree).join()}]`,
    }),
  ],
  rehypeAddLastModified,
]
