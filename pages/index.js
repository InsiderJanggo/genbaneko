import Head from 'next/head'
import { getAllPosts } from '@/lib/markdownApi'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogCard from '@/components/BlogCard'
import Popup from '@/components/Popup';
import Text from '@/components/Text';
import Container from '@/components/Container';
import { createRef } from 'react';

export default function Index({ posts }) {
  return (
    <div>
      <Head>
        <title>{'現場猫ブログ・ホーム'}</title>
      </Head>
      <Popup message={'現場猫ブログへようこそ！'}/>
      <Container>
       
        <Text>色々ポスト：</Text>
        
        {posts.map((data) => (
          <BlogCard data={data} key={data.slug} />
        ))}
      </Container>
      <Popup message={'現場猫ブログへようこそ！'}/>    
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
      'category_color'
    ]);

    return {
      props: {
          posts,
          ...(await serverSideTranslations(context.locale, ['navbar']))
      }, 
    }
}
