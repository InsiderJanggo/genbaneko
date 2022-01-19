import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '@/lib/markdownApi'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';

export default function Post({ data, otherPost }) {
  return (
    <div>
      <Head>
        <title>{data.title}・現場猫ブログ</title>
        <meta name="title" content={data.title} />
        <meta name="description" content={data.description} />
        <meta name='image' content={data.image.cover} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image.cover} />
        <meta property='twitter:image' content={data.image.cover} />
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
            },
            block({ children }) {
                return <block style={{ backgroundColor: '#092237!important', color: 'white' }}>{children}</block>
            },
            category({ children }) {
              return (
                <Link href={`/category/[name]`} as={`/category/${data.category.id}`} passHref>
                  <category style={{ textAlign: 'center', color: 'blue', cursor: 'pointer' }}>
                    {children}
                  </category>
                </Link>
              )
            }
          }}>
                {data.content}
          </ReactMarkdown>
      </div>
      <div className='container mx-auto'>
          
      </div>
      <ScrollToTop />
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
    const otherPost = getAllPosts([
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
            otherPost,
            ...(await serverSideTranslations(context.locale, ['navbar']))
        }, 
    }
}
