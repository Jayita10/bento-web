import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import LeaderboardParent from "../components/leaderboard/leaderboardParent";
import { getData } from "./api/globalLeaderboard";
import { motion, Variants } from "framer-motion"
import { NextSeo } from "next-seo";

const animation: Variants = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
        duration: 1.5,
      }
  },
}

interface LeaderboardRankingsInterface {
  rank: string,
  level: number,
  xp: number,
  userID: string,
  avatarURL: string,
  username: string,
  discriminator: string
}

interface userRankingsInterface {
  users: LeaderboardRankingsInterface[]
}
/*
export const getServerSideProps: GetServerSideProps = async () => {
  const resUsers = await getData()

  return {
    props: {
      users: resUsers
    },
  }
}
*/

export const getStaticProps: GetStaticProps = async () => {
  const resUsers = await getData()

  return {
    props: {
      users: resUsers
    }, revalidate: 60
  }
}
export default function Leaderboard({users}: userRankingsInterface) {
    return (
      <div>
        <Head>
        <title>Bento 🍱 | Leaderboard</title>
      </Head>
      <NextSeo 
				description="Check out the Global Leaderboard for Bento 🍱"
				openGraph={{
					title: "Bento 🍱 | Leaderboard"
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
							"Check out the Global Leaderboard for Bento 🍱"
					}
				]} />
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="lg:text-center text-center overflow-visible">
            <motion.p initial="hidden"
        animate="show"
        variants={animation} className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:text-center">
              Leaderboard for Bento 🍱
            </motion.p>
            <br></br>
            <div className='max-w-screen-2xl mx-auto px-3 pt-2'>
              <LeaderboardParent items={users}/>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }