import Layout from '@/components/Layout'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp)