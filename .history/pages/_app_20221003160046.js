import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
 <Layout>
   return <Component {...pageProps} />
 </Layout>
}

export default MyApp
