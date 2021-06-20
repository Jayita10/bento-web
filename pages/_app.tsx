import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-800 flex flex-col min-h-screen">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp
