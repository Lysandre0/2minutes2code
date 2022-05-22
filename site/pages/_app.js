import { ApiProvider } from '../contexts/ApiProvider';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // return <Component {...pageProps} />
  return <ApiProvider><Component {...pageProps} /></ApiProvider>
}

export default MyApp
