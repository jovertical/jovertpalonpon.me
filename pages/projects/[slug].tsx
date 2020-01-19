import React, { useState } from 'react'
import { NextPage } from 'next'
import LazyLoad from 'react-lazyload'
import cx from 'classnames'
import Button from '@frontend/components/Button'
import Icon from '@frontend/components/Icon'
import AngleLeftIcon from '@frontend/components/Icons/AngleLeft'
import AngleRightIcon from '@frontend/components/Icons/AngleRight'
import ArrowLeftIcon from '@frontend/components/Icons/ArrowLeft'
import ArrowRightIcon from '@frontend/components/Icons/ArrowRight'
import FacebookIcon from '@frontend/components/Icons/Facebook'
import TwitterIcon from '@frontend/components/Icons/Twitter'
import Layout from '@frontend/components/Layout'
import Lightbox from '@frontend/components/Lightbox'
import Link, { ExternalLink } from '@frontend/components/Link'
import SEO from '@frontend/components/SEO'
import Text from '@frontend/components/Text'
import { get } from '@frontend/helpers/api'

interface Props {
  project?: Project
  seo: SEO
}

const Project: NextPage<Props> = ({ project, seo }) => {
  const [activeImage, setActiveImage] = useState<number>(-1)

  return (
    <Layout>
      <SEO {...seo} />
      <section className="mb-10">
        <div className="relative py-16 bg-gradient-r-blue-darker-blue">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-4/5 lg:w-3/4 mx-auto">
            <div className="text-center lg:text-left">
              <Text variant="h4" weight="bold" className="text-white">
                {project?.name}
              </Text>
              <ExternalLink href={project?.projectUrl} variant="custom">
                <Text
                  variant="sub"
                  className="text-gray-300 hover:text-gray-100 cursor-pointer mb-2"
                >
                  {project?.projectUrl}
                </Text>
              </ExternalLink>
              <div className="flex justify-center lg:justify-start flex-wrap -mx-1 mb-5">
                {project?.tags?.map(tag => (
                  <Link
                    key={tag.id}
                    href={`/projects?tag=${tag.name}`}
                    className="mx-1 mt-2 px-3 py-1 rounded-full bg-blue hover:bg-blue-darker"
                    variant="custom"
                  >
                    <Text variant="sub" className="text-white">
                      {tag.name}
                    </Text>
                  </Link>
                ))}
              </div>
              <Text className="text-white mb-5 lg:h-24 lg:mb-0">
                {project?.description}
              </Text>
              <div className="flex justify-center lg:justify-start">
                {project?.sourceUrl && (
                  <ExternalLink href={project?.sourceUrl} variant="custom">
                    <Button variant="secondary">View Source</Button>
                  </ExternalLink>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center w-40 h-40 lg:w-56 lg:h-56 mb-5 lg:mb-0 rounded-full border-4 border-blue-lighter bg-gray-800 text-white">
              <img src={project?.iconUrl} alt={project?.name} />
            </div>
          </div>

          <div className="flex justify-between lg:hidden w-full px-2 absolute top-1/2 left-0 right-0">
            {project?.previousProject !== null && (
              <Link
                href="/projects/[slug]"
                as={`/projects/${project?.previousProject?.slug}`}
              >
                <Icon size="lg" variant="custom">
                  <AngleLeftIcon className="text-gray-800 rounded-full bg-white" />
                </Icon>
              </Link>
            )}

            <div />

            {project?.nextProject !== null && (
              <Link
                href="/projects/[slug]"
                as={`/projects/${project?.nextProject?.slug}`}
              >
                <Icon size="lg" variant="custom">
                  <AngleRightIcon className="text-gray-800 rounded-full bg-white" />
                </Icon>
              </Link>
            )}
          </div>
        </div>
        <div className="hidden lg:flex justify-between px-10 py-4 bg-gray-300">
          <span
            className={cx('flex items-center', {
              'invisible': project?.previousProject === null
            })}
          >
            <Icon variant="custom" className="mr-2">
              <ArrowLeftIcon className="text-gray-700" />
            </Icon>
            <Link
              href="/projects/[slug]"
              as={`/projects/${project?.previousProject?.slug}`}
              className="text-gray-700"
            >
              Previous Project
            </Link>
          </span>

          <div className="flex">
            <Icon variant="custom" size="sm" className="mx-3">
              <FacebookIcon className="facebook-icon rounded-full p-2 bg-gray-500 text-white" />
            </Icon>

            <Icon variant="custom" size="sm" className="mx-3">
              <TwitterIcon className="twitter-icon rounded-full p-2 bg-gray-500 text-white" />
            </Icon>
          </div>

          <span
            className={cx('flex items-center', {
              'invisible': project?.nextProject === null
            })}
          >
            <Link
              href="/projects/[slug]"
              as={`/projects/${project?.nextProject?.slug}`}
              className="mr-2 text-gray-700"
            >
              Next Project
            </Link>
            <Icon variant="custom">
              <ArrowRightIcon className="text-gray-700" />
            </Icon>
          </span>
        </div>
      </section>

      <section className="w-11/12 lg:w-1/2 mx-auto">
        <Text variant="h6" weight="bold" className="mb-4">
          Project Screenshots
        </Text>

        <div className="flex flex-wrap -mx-2">
          {project?.images?.map((image, i) => (
            <div
              key={`Project ImageL ${i}`}
              className="w-full lg:w-1/3 mb-4 px-2 cursor-zoom-in"
              onClick={(): void => setActiveImage(i)}
            >
              <LazyLoad>
                <div
                  style={{ backgroundImage: `url("${image.url}")` }}
                  className="pt-11:8 h-0 bg-cover bg-center rounded"
                />
              </LazyLoad>
            </div>
          ))}
          <Lightbox
            images={project?.images?.map(image => image.url) || []}
            activeIndex={activeImage}
            handleReset={(): void => setActiveImage(-1)}
          />
        </div>
      </section>
    </Layout>
  )
}

Project.getInitialProps = async ({ query, req }): Promise<Props> => {
  const { body } = await get(`/projects/${query?.slug}`)
  const project: Project = body

  return {
    project,
    seo: {
      title: `Jovert's Projects: ${project?.name}`,
      description: project?.description,
      url: `${req?.headers?.['x-forwarded-proto']}://${req?.headers?.['x-forwarded-host']}/projects/${query?.slug}`,
      image: project?.image?.url
    }
  }
}

export default Project
