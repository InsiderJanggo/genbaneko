import Head from 'next/head'
import { getAllPosts } from '@/lib/markdownApi'
import BlogCard from '@/components/BlogCard'
import Popup from '@/components/Popup';
import Text from '@/components/Text';
export default function Index({ posts }) {
  return (
    <div>
      <Head>
        <title>{'現場猫ブログ・ホーム'}</title>
      </Head>
      <Popup message={'現場猫ブログへようこそ！'}/>
      <Text>色々ポスト</Text>
      
      {posts.map((data) => (
        <BlogCard data={data} key={data.slug} />
      ))}

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
          posts
      }, 
    }
}
