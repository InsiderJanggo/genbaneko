import Container from '@/components/Container'
import defaultMeta from '@/lib/defaultMeta'
import Head from 'next/head'

export default function Category() {
    return (
        <div>
            <Head>
                <title>サイト・現場猫ブログ</title>
                <meta name="description" content={defaultMeta.meta.description} />
                <meta name='image' content={defaultMeta.meta.image} />
                <meta property='twitter:image' content={defaultMeta.meta.image} />
                <meta property="og:title" content={defaultMeta.meta.title} />
                <meta property="og:description" content={defaultMeta.meta.description} />
                <meta property="og:image" content={defaultMeta.meta.image} />
            </Head>
            <Container>
                
            </Container>
        </div>
    )
}
