import Head from "next/head";
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

export default function About() {
    return (
      <div>
        <Head>
        <title>About Bento 🍱</title>
      </Head>
      <div className="py-12 bg-gray-800">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={animation} whileHover={{scale: 1.05}}>
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:text-center">
              About Bento 🍱
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:mx-auto">
              Bento 🍱 is a Discord bot that covers the standard features of most Discord bots, but with a few extra features and a focus on quality delivery.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:mx-auto">
              Bento 🍱 was started as a project to learn JavaScript and programming in general, and is a project of continuous learning and improvement.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="lg:text-center" initial='hidden' animate='show' variants={animation} whileHover={{scale: 1.05}}>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:text-center">
              What powers Bento 🍱?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:mx-auto">
            Bento 🍱 is written in {" "}
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noreferrer"
                        className='text-typescript hover:underline'
                    >
                        TypeScript
                    </a>{" "} and uses the {" "}
                    <a
                        href="https://discord.js.org/#/"
                        target="_blank"
                        rel="noreferrer"
                        className='text-discordBlue hover:underline'
                    >
                        Discord.js
                    </a>{" "} Node.js module that interacts with the {" "}
                    <a
                        href="https://discord.com/developers/docs/reference"
                        target="_blank"
                        rel="noreferrer"
                        className='text-discordBlue hover:underline'
                    >
                        Discord API
                    </a>.{" "} Bento 🍱 uses a {" "}
                    <a
                        href="https://www.postgresql.org/"
                        target="_blank"
                        className='text-postgresql hover:underline'
                    >
                        PostgreSQL
                    </a>{" "} database.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:mx-auto">
            The Bento 🍱 website is powered by {" "}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:underline"
                    >
                        Next.js
                    </a> and {" "}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        className='text-tailwindcss hover:underline'
                    >
                        Tailwind CSS
                    </a>.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:mx-auto">
            All the source code are open-source and available on {" "}
                    <a
                        href="https://github.com/thebentobot"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:underline"
                    >
                        GitHub
                    </a>.{" "}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:mx-auto">
            The development of Bento 🍱 is {" "}
                    <a
                        className='font-bold'
                    >
                        most importantly
                    </a>{" "} supported by a community of supporters and good friends on the {" "}
                    <a
                        href="https://discord.gg/dd68WwP"
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-400 hover:underline"
                    >
                        Bento 🍱 Support Server
                    </a>{" "} where ideas, discussion, feedback and bug reporting are happening, besides just chatting. Everyone is welcome to join!
            </p>
          </motion.div>
        </div>
      </div>
      </div>
      
    );
  }