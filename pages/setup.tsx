import Head from "next/head";
import BentoGreeting from "../components/discordMessages/bentoGreeting";
import Prefix from "../components/discordMessages/admin/prefix";
import Settings from "../components/discordMessages/admin/settings";
import { motion, Variants } from "framer-motion"

const animation: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    }
  }
}

export default function Setup() {
    return (
      <div>
        <Head>
        <title>How to setup Bento 🍱</title>
      </Head>
      <div className="py-12 bg-gray-800">
        <motion.div className="max-w-7xl mx-auto" initial='hidden' animate='show' variants={animation}>
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:text-center px-4 sm:px-6 lg:px-8">
              How to setup Bento 🍱 for your Discord server
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:mx-auto px-4 sm:px-6 lg:px-8">
              When Bento 🍱 joins your server, you will automatically be greeted by this message from Bento 🍱
            </p>
          </div>
          <br></br>
          <motion.div className='container mx-auto px-1200 shadow' whileHover={{scale: 1.05}}>
            <BentoGreeting />
          </motion.div>
          <div className="lg:text-center">
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center sm:mx-auto px-4 sm:px-6 lg:px-8">
              Then you can change prefix, if it conflicts with other bots
            </p>
          </div>
          <br></br>
          <motion.div className='container mx-auto px-1200 shadow' whileHover={{scale: 1.05}}>
            <Prefix />
            </motion.div>
          <div className="lg:text-center">
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center sm:mx-auto px-4 sm:px-6 lg:px-8">
              And get an overview of what settings are enabled by default
            </p>
          </div>
          <br></br>
          <motion.div className='container mx-auto px-1200 shadow' whileHover={{scale: 1.05}}>
            <Settings />
            </motion.div>
          <div className="lg:text-center">
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center sm:mx-auto px-4 sm:px-6 lg:px-8">
              Do you want to disable TikTok or set a welcome message? <br></br>Find out how by clicking below!
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:text-center">
          <div className="rounded-md shadow px-4 sm:px-6 lg:px-8">
                  <motion.a
                    href="/commands#admin"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 hover:text-black md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    Admin Commands
                  </motion.a>
          </div>
          </div>
        </motion.div>
      </div>
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center sm:mx-auto sm:max-w-xl px-4 sm:px-6 lg:px-8">
              Got any questions about setting up Bento 🍱 or its features?
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:text-center">

            <div className="rounded-md shadow">
                  <motion.a
                    href="https://discord.gg/dd68WwP"
                    className="w-full flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 hover:text-black md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8"
                    whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    Join the Bento Support Server on Discord
                  </motion.a>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }