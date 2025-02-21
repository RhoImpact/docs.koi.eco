import { mdxAnnotations } from 'mdx-annotations'
import remarkGfm from 'remark-gfm'
import { remarkModifiedTime } from './remark-modified-time.mjs'

export const remarkPlugins = [mdxAnnotations.remark, remarkGfm, remarkModifiedTime]
