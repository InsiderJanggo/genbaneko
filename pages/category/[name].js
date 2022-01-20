import Container from '@/components/Container'
import defaultMeta from '@/lib/defaultMeta'
import Head from 'next/head'
import { getAllPosts } from '@/lib/markdownApi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogCard from '@/components/BlogCard';
import ScrollToTop from '@/components/ScrollToTop';

export default function Category({ posts, param }) {
    const getCategory = () => {
        return posts.filter(data => param == data.category.id).map((data) => {
            return data.category.name
        })
    }

    return (
        <div>
            <Head>
                <title>「{getCategory()}」 カテゴリー・現場猫ブログ</title>
                <meta name="description" content={defaultMeta.meta.description} />
                <meta name='image' content={defaultMeta.meta.image} />
                <meta property='twitter:image' content={defaultMeta.meta.image} />
                <meta property="og:title" content={defaultMeta.meta.title} />
                <meta property="og:description" content={defaultMeta.meta.description} />
                <meta property="og:image" content={defaultMeta.meta.image} />
            </Head>
            <Container>
                {posts.filter(data => param == data.category.id).map((post) => (
                    <BlogCard key={post.slug} data={post} />
                ))}
            </Container>
            <ScrollToTop />
        </div>
    )
}

/**
* @param {import('next').GetStaticPropsContext} context
* @returns
*/
export async function getStaticPaths(context) {
    const posts = getAllPosts(['category']);

    return {
        paths: posts.map((post) => {
          return {
            params: {
              name: post.category.id
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
    const posts = getAllPosts([
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
            posts,
            param: context.params.name,
            ...(await serverSideTranslations(context.locale, ['navbar']))
        }, 
    }
}
