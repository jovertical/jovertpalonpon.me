import React from 'react'
import { NextPage } from 'next'
import LazyLoad from 'react-lazyload'
import FeaturedProjects from '@frontend/components/FeaturedProjects'
import Layout from '@frontend/components/Layout'
import SEO from '@frontend/components/SEO'
import Text from '@frontend/components/Text'
import * as SKILLS from '@frontend/constants/skills'

const Index: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <section className="pt-5 bg-white">
        <div className="py-16 px-5 lg:px-0 text-center">
          <Text variant="h3" weight="bold" className="mb-5">
            Full Stack Developer
          </Text>

          <Text variant="h6">
            I code and deploy applications, through the help of coffee...
          </Text>
        </div>

        <div className="w-3/4 lg:w-1/2 mx-auto">
          <LazyLoad>
            <img src="/svg/web_developer.svg" alt="Web Developer" />
          </LazyLoad>
        </div>
      </section>

      <section className="bg-blue px-5 pt-16 pb-40 text-center">
        <Text variant="h4" weight="bold" className="text-white mb-4">
          Hi, {`I'm`} Jovert. Nice to meet you.
        </Text>

        <Text variant="h6" className="lg:w-1/2 mx-auto text-white">
          My journey began 2 years ago right after our capstone project when I
          started collaborating with my school mates in freelance projects for
          small businesses, my corporate career is spent for start-up companies
          making me a resourceful person as a result. {`I'm`} also collaborating
          with my colleagues in developing applications that can help the
          society. Throughout the years {`I've`} expanded my knowledge from
          front-end stuff to back-end and then DevOps. I only follow a basic
          principle: {`"Don't Repeat Yourself"`}.
        </Text>
      </section>

      <section className="-mt-32 mx-5 lg:mx-40">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-1/3 px-2 mb-5 lg:mb-0">
            <div className="h-full text-center p-8 bg-white rounded border hover:shadow-lg">
              <div className="m-5">
                <svg
                  className="fill-current text-blue h-16 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 17h-2v2h2v-2zm2 0v2h2a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h2v-2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5zM4 5v10h16V5H4z" />
                </svg>
              </div>

              <Text variant="h6" weight="bold" className="mb-4">
                Front-end Developer
              </Text>

              <Text className="h-32 mb-10">
                I love to convert a design into code, ensure that it is
                responsive and cross-browser compatible.I always tries to be the{' '}
                {`"user"`} when doing frontend stuff.
              </Text>

              <Text variant="h6" className="mb-2 text-blue">
                Languages I Speak:
              </Text>

              <Text className="mb-10">
                {SKILLS.frontendLanguages.map(
                  (lang, i) =>
                    lang +
                    (i + 1 === SKILLS.frontendLanguages.length ? '' : ', ')
                )}
              </Text>

              <Text variant="h6" className="mb-2 text-blue">
                Dev Tools:
              </Text>

              <ul>
                {SKILLS.frontendTools.map((tool, i) => (
                  <li key={i}>
                    <Text>{tool}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-2 mb-5 lg:mb-0">
            <div className="h-full text-center p-8 bg-white rounded border hover:shadow-lg">
              <div className="m-5">
                <svg
                  className="fill-current text-blue h-16 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z" />
                </svg>
              </div>

              <Text variant="h6" weight="bold" className="mb-4">
                Back-end Developer
              </Text>

              <Text className="h-32 mb-10">
                I love making simple to complex application backend systems, I
                code with maintainability in mind by following industry-proven
                coding standards.
              </Text>

              <Text variant="h6" className="mb-2 text-blue">
                Languages I Speak:
              </Text>

              <Text className="mb-10">
                {SKILLS.backendLanguages.map(
                  (lang, i) =>
                    lang +
                    (i + 1 === SKILLS.backendLanguages.length ? '' : ', ')
                )}
              </Text>

              <Text variant="h6" className="mb-2 text-blue">
                Dev Tools:
              </Text>

              <ul>
                {SKILLS.backendTools.map((tool, i) => (
                  <li key={i}>
                    <Text>{tool}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-2 mb-5 lg:mb-0">
            <div className="h-full text-center p-8 bg-white rounded border hover:shadow-lg">
              <div className="m-5">
                <svg
                  className="fill-current text-blue h-16 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </div>

              <Text variant="h6" weight="bold" className="mb-4">
                DevOps Enthusiast
              </Text>

              <Text className="h-32 mb-10">
                My interest in DevOps and cloud has just developed over the
                years, its just fulfilling to see your app being a reality. I
                ensure that the app is secure &amp; scalable.
              </Text>

              <Text variant="h6" className="mb-2 text-blue">
                Tools I use:
              </Text>

              <Text className="mb-10">
                {SKILLS.devOpsTools.map(
                  (lang, i) =>
                    lang + (i + 1 === SKILLS.devOpsTools.length ? '' : ', ')
                )}
              </Text>

              <Text variant="h6" className="mb-2 text-blue">
                Cloud Platforms I deploy to:
              </Text>

              <ul>
                {SKILLS.cloudPlatforms.map((platform, i) => (
                  <li key={i}>
                    <Text>{platform}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32 mx-5 lg:mx-40 text-center">
        <FeaturedProjects />
      </section>
    </Layout>
  )
}

export default Index
