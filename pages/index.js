import Head from 'next/head'
import { getAllPosts } from '@/lib/markdownApi'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogCard from '@/components/BlogCard'
import Popup from '@/components/Popup';
import Text from '@/components/Text';
import Container from '@/components/Container';
import defaultMeta from '@/lib/defaultMeta';
import ScrollToTop from '@/components/ScrollToTop';
import SearchInput from '@/components/SearchInput';
import { useState } from 'react';
import Input from '@/components/Input';

const BASE_URL = 'https://twitter.com/intent/tweet?url='

export default function Index({ posts }) {
    const [value, setValue] = useState('')


    /**
     * @param {Array} rows 
     * @param {String} filterKeys 
     * @returns 
    */
    const searchPost = (rows, filterKeys) => {
        return rows.filter((row) => JSON.stringify(row).includes(filterKeys))
    }

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
       
        <SearchInput onSubmit={searchPost}>
          <div className="px-5 py-5">
                <Text>ポストを検索</Text>
            </div>
            <div>
                <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </SearchInput>

        <Text>色々ポスト：</Text>
        
        <div className='grid grid-rows-3 grid-flow-col gap-4'>
          {searchPost(posts, value).map((data) => (
            <BlogCard data={data} key={data.slug} />
          ))}
        </div>
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
