import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '@/lib/markdownApi'
import markdownToHtml from '@/lib/markdownToHtml'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'

export default function Post({ data }) {
  return (
    <div>
      <Head>
        <title>{data.title}・現場猫ブログ</title>
      </Head>
      <Image alt='Image' src={data.image.cover} width={300} height={300} />
       <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {data.content}
       </ReactMarkdown>
    </div>
  )
}

/**
* @param {import('next').GetStaticPropsContext} context
* @returns
*/
export async function getStaticPaths(context) {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => {
          return {
            params: {
              slug: post.slug,
            },
          }
        }),
        fallback: false,
    }
}

/**
* @param {import('next').GetStaticPropsContext} context
* @returns
*/
export async function getStaticProps(context) {
    const post = getPostBySlug(context.params.slug, [
      'title',
      'createdAt',
      'slug',
      'author',
      'content',
      'image',
      'read',
      'description',
      'category',
      'category_color'
    ])

    return {
        props: {
            data: post,
        }, 
    }
}
