import Document, { Html, Head, Main, NextScript } from 'next/document'

const defaultMeta = {
    icon: '/favicon.ico',
    meta: {
        description: "現場猫ファンサイト",
        image: '/assets/realpenguin.jpg'
    }
}

export default class MyDocument extends Document {
    render() {
        return(
            <Html lang='ja' dir='ja'>
                <Head>
                    <meta name="description" content={defaultMeta.meta.description} />
                    <meta name='image' content={defaultMeta.meta.image} />
                    <link rel="icon" href={defaultMeta.icon} />
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