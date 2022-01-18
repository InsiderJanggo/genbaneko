import Document, { Html, Head, Main, NextScript } from 'next/document'

const defaultMeta = {
    icon: '/favicon.ico',
    meta: {
        title: '現場猫ブログ',
        description: "現場猫ファンサイト",
        image: '/assets/realpenguin.jpg',
        twitter: {
           card: 'summary',
           site: '@wisly_ong',
           creator: '@wisly_ong',
           title: '現場猫ブログ',
           image: '/assets/realpenguin.jpg',
        }
    }
}

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <meta name="description" content={defaultMeta.meta.description} />
                    <meta name='image' content={defaultMeta.meta.image} />
                    <link rel="icon" href={defaultMeta.icon} />
                    <meta name='twitter:title' content={defaultMeta.meta.twitter.title} />
                    <meta name="twitter:card" content={defaultMeta.meta.twitter.card} />
                    <meta name="twitter:site" content={defaultMeta.meta.twitter.site} />
                    <meta name="twitter:image" content={defaultMeta.meta.twitter.image} />
                    <meta name="twitter:creator" content={defaultMeta.meta.twitter.creator} />
                    <meta property="og:title" content={defaultMeta.meta.title} />
                    <meta property="og:description" content={defaultMeta.meta.description} />
                    <meta property="og:image" content={defaultMeta.meta.image} />
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}