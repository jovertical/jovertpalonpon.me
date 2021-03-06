import React from 'react'
import LazyLoad from 'react-lazyload'
import Button from '@frontend/components/Button'
import Icon from '@frontend/components/Icon'
import DribbbleIcon from '@frontend/components/Icons/Dribbble'
import GithubIcon from '@frontend/components/Icons/Github'
import LinkedinIcon from '@frontend/components/Icons/Linkedin'
import MessageIcon from '@frontend/components/Icons/Message'
import TwitterIcon from '@frontend/components/Icons/Twitter'
import Logo from '@frontend/components/Logo'
import { ExternalLink } from '@frontend/components/Link'
import Contact from '@frontend/components/Modals/Contact'
import Text from '@frontend/components/Text'
import { social as socialLinks } from '@frontend/constants/links'

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-32 bg-gradient-t-blue-darker-blue text-white">
      <div className="absolute w-full flex justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-3/4 -mt-24 mx-5 lg:mx-0 p-8 lg:p-16 rounded-lg bg-gray-900">
          <div className="lg:w-2/3">
            <Text variant="h4" className="mb-2">
              What about a project?
            </Text>
            <Text className="mb-4 lg:mb-0">
              Have that little idea of yours? I can help you in making that a
              reality.
            </Text>
          </div>
          <Contact>
            <Button variant="secondary">Let's do this</Button>
          </Contact>
        </div>
      </div>
      <div className="text-center lg:w-1/2 p-5 lg:p-32 mx-auto">
        <div className="mt-20 lg:mt-10 mb-5 inline-block">
          <LazyLoad>
            <Logo variant="secondary" size="lg" />
          </LazyLoad>
        </div>

        <Text variant="h6" className="mb-10 text-white">
          Anything is possible, Don&apos;t limit yourself on the things that you
          can do.
        </Text>

        <div className="mb-10">
          <ExternalLink
            href={socialLinks.github}
            variant="custom"
            title="My Github profile"
            className="mx-4 lg:mx-5"
          >
            <Icon variant="custom">
              <GithubIcon className="border-2 border-blue-lighter hover:border-white hover:border-none hover:text-blue hover:bg-white rounded-full p-2" />
            </Icon>
          </ExternalLink>

          <ExternalLink
            href={socialLinks.dribbble}
            variant="custom"
            title="My Dribble profile"
            className="mx-4 lg:mx-5"
          >
            <Icon variant="custom">
              <DribbbleIcon className="border-2 border-blue-lighter hover:border-white hover:border-none hover:text-blue hover:bg-white rounded-full p-2" />
            </Icon>
          </ExternalLink>

          <ExternalLink
            href={socialLinks.linkedin}
            variant="custom"
            title="My Linkedin profile"
            className="mx-4 lg:mx-5"
          >
            <Icon variant="custom">
              <LinkedinIcon className="border-2 border-blue-lighter hover:border-white hover:border-none hover:text-blue hover:bg-white rounded-full p-2" />
            </Icon>
          </ExternalLink>

          <ExternalLink
            href={socialLinks.twitter}
            variant="custom"
            title="My Twitter profile"
            className="mx-4 lg:mx-5"
          >
            <Icon variant="custom">
              <TwitterIcon className="border-2 border-blue-lighter hover:border-white hover:border-none hover:text-blue hover:bg-white rounded-full p-2" />
            </Icon>
          </ExternalLink>

          <ExternalLink
            href={`mailto:${socialLinks.email}`}
            variant="custom"
            title="Send me an Email"
            className="mx-4 lg:mx-5"
          >
            <Icon variant="custom">
              <MessageIcon className="border-2 border-blue-lighter hover:border-white hover:border-none hover:text-blue hover:bg-white rounded-full p-2" />
            </Icon>
          </ExternalLink>
        </div>

        <Text variant="sub" className="mb-5 text-gray-300">
          Handcrafted with
          <svg
            className="fill-current text-red-500 inline-block mx-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0  c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z" />
          </svg>
          by me &copy; {new Date().getFullYear()}
        </Text>

        <span className="w-full flex justify-center items-center">
          <Text variant="sub" className="text-gray-300 mr-1">
            Made with
          </Text>

          <ExternalLink
            href="https://tailwindcss.com"
            variant="custom"
            title="Tailwind CSS"
            className="mx-4 lg:mx-5"
          >
            <svg
              className="fill-current text-gray-300 h-10"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Tailwind CSS</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"
              />
            </svg>
          </ExternalLink>
        </span>
      </div>
    </footer>
  )
}

export default Footer
