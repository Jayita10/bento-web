import Head from "next/head";
import BentoGreeting from "../components/discordMessages/bentoGreeting";
import Prefix from "../components/discordMessages/prefix";
import Settings from "../components/discordMessages/settings";

export default function Setup() {
    return (
      <div>
        <Head>
        <title>How to setup Bento 🍱</title>
      </Head>
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              How to setup Bento 🍱 for your Discord server
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              When Bento 🍱 joins your server, you will automatically be greeted by this message from Bento 🍱
            </p>
          </div>
          <br></br>
          <div className='container mx-auto px-1200'>
            <BentoGreeting />
          </div>
          <div className="lg:text-center">
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Then you can change prefix, if it conflicts with other bots
            </p>
          </div>
          <br></br>
          <div className='container mx-auto px-1200'>
            <Prefix />
          </div>
          <div className="lg:text-center">
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              And get an overview of what settings are enabled by default
            </p>
          </div>
          <br></br>
          <div className='container mx-auto px-1200'>
            <Settings />
          </div>
          <div className="lg:text-center">
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Do you want to disable TikTok's or set a welcome message? <br></br>Find out how by clicking below!
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:text-center">
          <div className="rounded-md shadow">
                  <a
                    href="/commands#settings"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-white md:py-4 md:text-lg md:px-10"
                  >
                    Admin Commands
                  </a>
                </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Got any questions about setting up Bento 🍱 or its features?
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:text-center">

            <div className="rounded-md shadow">
                  <a
                    href="https://discord.gg/dd68WwP"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-white md:py-4 md:text-lg md:px-10"
                  >
                    Join the Bento support server on Discord
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }