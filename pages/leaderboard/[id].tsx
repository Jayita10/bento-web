import { GetServerSideProps } from "next";
import Head from "next/head";
import LeaderboardParent from "../../components/leaderboard/leaderboardParent";
import { getData as getUsersData} from "../api/leaderboard";
import { getData as getGuildData } from "../api/guild";
import { motion, Variants } from "framer-motion"
import { NextSeo } from "next-seo";

const animation: Variants = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
        duration: 2,
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

interface guildInterface {
  guildID: bigint,
  guildName: string,
  leaderboard: boolean,
  icon: string
}

interface userRankingsInterface {
  users: LeaderboardRankingsInterface[]
  guild: guildInterface
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const guildID = query.id
  const resUsers = await getUsersData(guildID as string)
  const resServer = await getGuildData(guildID as string)

  return {
    props: {
      users: resUsers, guild: resServer
    },
  }
}

export default function Leaderboard({users, guild}: userRankingsInterface) {
    return (
      <div>
        <Head>
        <title>Bento 🍱 | Leaderboard for {guild.guildName}</title>
      </Head>
      <NextSeo 
				description={`Check out the Bento 🍱 Leaderboard for ${guild.guildName}`}
				openGraph={{
					title: `Bento 🍱 | Leaderboard for ${guild.guildName}`
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
            `Check out the Bento 🍱 Leaderboard for ${guild.guildName}`
					}
				]} />
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center text-center overflow-visible">
            <motion.p initial="hidden"
        animate="show"
        variants={animation} className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Leaderboard for {guild.guildName}
            </motion.p>
            <motion.div className='bg-gray-900 mx-auto my-auto p-2 mt-8 w-64 rounded shadow-lg bg-opacity-50' initial="hidden"
        animate="show"
        variants={animation}>
            <motion.img width={256} height={256} initial="hidden"
        animate="show"
        variants={animation} className='mx-auto shadow-lg' src={guild.icon}></motion.img>
            </motion.div>
            <br></br>
            <div className='max-w-screen-2xl mx-auto px-3'>
              <LeaderboardParent items={users}/>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }