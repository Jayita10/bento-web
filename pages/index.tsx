//import { Fragment } from 'react'
import { Popover } from '@headlessui/react'
import { CogIcon, ChatIcon, FireIcon, UsersIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Magnificent Moderation Tools',
    description:
      'Case descriptive system for warnings, kicks, mutes and bans, which you can edit on the go. Check cases across servers who has Bento 🍱 and more',
    icon: ChatIcon,
  },
  {
    name: 'Amusing Chat XP System For Your Users',
    description:
      'Users gain XP for every minute they chat and are able to see who has written the most by the server\'s own leaderboard. Every day, users are able to give a 🍱 to another user. Serverwide leaderboards are available as well',
    icon: UsersIcon,
  },
  {
    name: 'Amazing Extra Features',
    description:
      'Have your TikTok links embedded, check the weather or time anywhere in the world, check your horoscope, look up at GIF or picture, get an Urban Dictionary definition, compare LastFM statistics and make your own custom tags',
    icon: FireIcon,
  },
  {
    name: 'Accommodating Server Settings',
    description:
      'Do you only care for the moderation tools and think some of the extra features are unnecessary? Bento 🍱 allows you to enable and disable features according to your server and its preferences. Don\'t want NSFW results in your media? Disable it. Don\'t want media at all? Disable it.',
    icon: CogIcon,
  },
]

export default function Home() {
  return (
    <div>
    <div className="relative bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="-mr-2 flex items-center md:hidden">
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    </div>
                  </nav>
                </div>

                
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The Discord Bot</span>{' '}
                <span className="block text-yellow-300 xl:inline">Bento</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A Discord bot with server moderation tools and various entertaining commands.
              </p>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              (INSERT STATS HERE)
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-white md:py-4 md:text-lg md:px-10"
                  >
                    Add Bento to your server
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/commands"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                  >
                    View commands
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
          alt=""
        />
      </div>
    </div>
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">Bento</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            The bot you did not know you needed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
    
  )
}