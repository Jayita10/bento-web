import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
        banner: {
          author: 'Banner',
          avatar: 'https://cdn.discordapp.com/avatars/232584569289703424/a_d38527440ed3d5cd3a8045862472ff99.gif?size=1024',
          roleColor: '#ff00fa'
        },
        adam: {
          author: 'Adam',
          avatar: 'https://cdn.discordapp.com/avatars/223908083825377281/bca17fe842890a45c12dc58fb0b4be45.png?size=1024',
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
        },
        enter: {
          author: 'Enter',
          avatar: 'https://cdn.discordapp.com/avatars/188980576483540992/a_d12913067e9a4187178a3e69dc4cd2a7.gif?size=1024',
          roleColor: '#03f611'
        },
        tzuwy: {
          author: 'tzuwy',
          avatar: 'https://cdn.discordapp.com/avatars/150443906511667200/daf485b105036c46aba8c283af0358db.png?size=1024',
          roleColor: '#f0dacb'
        },
        alonzo: {
          author: 'alonzo',
          avatar: 'https://cdn.discordapp.com/avatars/370695349167325196/0b1b81f0a0180b881e1c24ac22e2e806.png?size=1024',
          roleColor: '#99ff99'
        },
			}
		};
	}, []);

  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 250 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="bg-gray-800 flex flex-col min-h-screen">
      <div className="fixed bottom-3 bg-yellow-400 right-3  cursor-pointer z-50">
      {isVisible && (
        <motion.div
          onClick={scrollToTop}
          className="fixed p-2 rounded-lg bg-yellow-400 bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer"
          whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
</svg>
        </motion.div>
      )}
    </div>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp
