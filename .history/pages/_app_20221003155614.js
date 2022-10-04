import '../styles/globals.css'
import Layout from '../components'
function MyApp({ Component, pageProps }) {
 <Layout>
   return <Component {...pageProps} />
 </Layout>
}

export default MyApp
