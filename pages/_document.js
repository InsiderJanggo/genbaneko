import Document, { Html, Head, Main, NextScript } from 'next/document'
import defaultMeta from '@/lib/defaultMeta'

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="icon" href={defaultMeta.icon} />
                    <meta name="twitter:card" content={defaultMeta.meta.twitter.card} />
                    <meta name="theme-color" content={defaultMeta.meta.color} />
                    <meta name='og:type' content={defaultMeta.meta.type} />
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