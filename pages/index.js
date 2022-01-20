import Head from 'next/head'
import { getAllPosts } from '@/lib/markdownApi'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogCard from '@/components/BlogCard'
import Popup from '@/components/Popup';
import Text from '@/components/Text';
import Container from '@/components/Container';
import defaultMeta from '@/lib/defaultMeta';
import ScrollToTop from '@/components/ScrollToTop';

export default function Index({ posts }) {
  return (
    <div>
      <Head>
        <title>{'現場猫ブログ・ホーム'}</title>
        <meta name="description" content={defaultMeta.meta.description} />
        <meta name='image' content={defaultMeta.meta.image} />
        <meta property='twitter:image' content={defaultMeta.meta.image} />
        <meta property="og:title" content={defaultMeta.meta.title} />
        <meta property="og:description" content={defaultMeta.meta.description} />
        <meta property="og:image" content={defaultMeta.meta.image} />
      </Head>
      <Container>
       
        <Text>色々ポスト：</Text>
        
        {posts.map((data) => (
          <BlogCard data={data} key={data.slug} />
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
    ]);

    return {
      props: {
          posts,
          ...(await serverSideTranslations(context.locale, ['navbar']))
      }, 
    }
}
