import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '@/lib/markdownApi'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function Post({ data }) {
  return (
    <div>
      <Head>
        <title>{data.title}・現場猫ブログ</title>
      </Head>
      <div className='container mx-auto'>
          <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]} 
          components={{
            a({ children, href }) {
                return <a style={{ color: 'blue', cursor: 'pointer' }} href={href}>{children}</a>
            },
            h1({ children }) {
              return <h1 className='text-center'>{children}</h1>
            },
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}>
                {data.content}
          </ReactMarkdown>
      </div>
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
            locale: context.locale,
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
      'category_color',
      'updatedAt'
    ])

    return {
        props: {
            data: post,
            ...(await serverSideTranslations(context.locale, ['navbar']))
        }, 
    }
}
