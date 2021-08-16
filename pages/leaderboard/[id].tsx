import { GetServerSideProps } from "next";
import Head from "next/head";
import LeaderboardParent from "../../components/leaderboard/leaderboardParent";
import { getData as getUsersData} from "../api/leaderboard";
import { getData as getGuildData } from "../api/guild";
import { motion, Variants } from "framer-motion"

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
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center text-center overflow-visible">
            <motion.p initial="hidden"
        animate="show"
        variants={animation} className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Leaderboard for {guild.guildName}
            </motion.p>
            <motion.img initial="hidden"
        animate="show"
        variants={animation} className='px-4 sm:px-6 mx-auto py-6' src={guild.icon}></motion.img>
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