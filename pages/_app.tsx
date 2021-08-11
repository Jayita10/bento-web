import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import React, { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
		window.$discordMessage = {
			profiles: {
				bentoBot: {
					author: 'Bento',
					avatar: `https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024`,
					roleColor: '#f9d61b',
          bot: true
				},
        adam: {
          author: 'Adam',
          avatar: 'https://cdn.discordapp.com/avatars/223908083825377281/0450014bf3793a53ee17c8a1cc602fc7.png?size=1024',
          roleColor: '#00B2FF'
        },
        lewis: {
          author: 'Lewis',
          avatar: 'https://cdn.discordapp.com/avatars/166142440233893888/a985e46ae81da885ca44310f50d21014.png?size=1024',
          roleColor: '#00B2FF'
        },
        fiji: {
          author: 'Fiji Spring Water',
          avatar: 'https://cdn.discordapp.com/avatars/229341113503318018/86a8d67d1369755c3fa58e2044d1b553.png?size=1024',
          roleColor: '#00B2FF'
        }
			}
		};
	}, []);
  return (
    <div className="bg-gray-800 flex flex-col min-h-screen">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp
