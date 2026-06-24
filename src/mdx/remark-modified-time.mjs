import { execSync } from 'child_process'

export function remarkModifiedTime() {
  // Adds lastModified to the file object using the git committer date of the
  // file's most recent commit. Requires a full git clone (fetch-depth: 0 in CI).
  // See rehypeAddLastModified for the export that makes this available in a page.
  return function (tree, file) {
    const filepath = file.history[0]
    const result = execSync(`git log -1 --pretty="format:%cI" -- "${filepath}"`).toString().trim()
    if (!result) {
      throw new Error(
        `[remark-modified-time] git log returned nothing for ${filepath}.\n` +
          `This usually means the CI checkout is a shallow clone. Add fetch-depth: 0 to actions/checkout.`
      )
    }
    file.data.lastModified = result
  }
}
