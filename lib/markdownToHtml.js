import { remark } from 'remark'
import markdownParse from 'remark-parse'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import highlight from 'remark-highlight.js'

export default async function markdownToHtml(markdown) {
    const result = await remark()
    .use(remarkGfm)
    .use(markdownParse)
    .use(highlight)
    .use(remarkHtml)
    .process(markdown)
    return result.toString()
}