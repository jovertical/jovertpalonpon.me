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
      <section className="tw-mb-10">
        <div className="tw-relative tw-py-16 tw-bg-gradient-r-blue-darker-blue">
          <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-justify-between tw-w-4/5 lg:tw-w-3/4 tw-mx-auto">
            <div className="tw-text-center lg:tw-text-left">
              <Text variant="h4" weight="bold" className="tw-text-white">
                {project?.name}
              </Text>
              <ExternalLink href={project?.projectUrl} variant="custom">
                <Text
                  variant="sub"
                  className="tw-text-gray-300 hover:tw-text-gray-100 tw-cursor-pointer tw-mb-2"
                >
                  {project?.projectUrl}
                </Text>
              </ExternalLink>
              <div className="tw-flex tw-justify-center lg:tw-justify-start tw-flex-wrap tw--mx-1 tw-mb-5">
                {project?.tags?.map(tag => (
                  <Link
                    key={tag.id}
                    href={`/projects?tag=${tag.name}`}
                    className="tw-mx-1 tw-mt-2 tw-px-3 tw-py-1 tw-rounded-full tw-bg-blue hover:tw-bg-blue-darker"
                    variant="custom"
                  >
                    <Text variant="sub" className="tw-text-white">
                      {tag.name}
                    </Text>
                  </Link>
                ))}
              </div>
              <Text className="tw-text-white tw-mb-5 lg:tw-h-24 lg:tw-mb-0">
                {project?.description}
              </Text>
              <div className="tw-flex tw-justify-center lg:tw-justify-start">
                {project?.sourceUrl && (
                  <ExternalLink href={project?.sourceUrl} variant="custom">
                    <Button variant="secondary">View Source</Button>
                  </ExternalLink>
                )}
              </div>
            </div>

            <div className="tw-flex tw-items-center tw-justify-center tw-w-40 tw-h-40 lg:tw-w-56 lg:tw-h-56 tw-mb-5 lg:tw-mb-0 tw-rounded-full tw-border-4 tw-border-blue-lighter tw-bg-gray-800 tw-text-white">
              <img src={project?.iconUrl} alt={project?.name} />
            </div>
          </div>

          <div className="tw-flex tw-justify-between lg:tw-hidden tw-w-full tw-px-2 tw-absolute tw-top-1/2 tw-left-0 tw-right-0">
            {project?.previousProject !== null && (
              <Link
                href="/projects/[slug]"
                as={`/projects/${project?.previousProject?.slug}`}
              >
                <Icon size="lg" variant="custom">
                  <AngleLeftIcon className="tw-text-gray-800 tw-rounded-full tw-bg-white" />
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
                  <AngleRightIcon className="tw-text-gray-800 tw-rounded-full tw-bg-white" />
                </Icon>
              </Link>
            )}
          </div>
        </div>
        <div className="tw-hidden lg:tw-flex tw-justify-between tw-px-10 tw-py-4 tw-bg-gray-300">
          <span
            className={cx('tw-flex tw-items-center', {
              'tw-invisible': project?.previousProject === null
            })}
          >
            <Icon variant="custom" className="tw-mr-2">
              <ArrowLeftIcon className="tw-text-gray-700" />
            </Icon>
            <Link
              href="/projects/[slug]"
              as={`/projects/${project?.previousProject?.slug}`}
              className="tw-text-gray-700"
            >
              Previous Project
            </Link>
          </span>

          <div className="tw-flex">
            <Icon variant="custom" size="sm" className="tw-mx-3">
              <FacebookIcon className="facebook-icon tw-rounded-full tw-p-2 tw-bg-gray-500 tw-text-white" />
            </Icon>

            <Icon variant="custom" size="sm" className="tw-mx-3">
              <TwitterIcon className="twitter-icon tw-rounded-full tw-p-2 tw-bg-gray-500 tw-text-white" />
            </Icon>
          </div>

          <span
            className={cx('tw-flex tw-items-center', {
              'tw-invisible': project?.nextProject === null
            })}
          >
            <Link
              href="/projects/[slug]"
              as={`/projects/${project?.nextProject?.slug}`}
              className="tw-mr-2 tw-text-gray-700"
            >
              Next Project
            </Link>
            <Icon variant="custom">
              <ArrowRightIcon className="tw-text-gray-700" />
            </Icon>
          </span>
        </div>
      </section>

      <section className="tw-w-11/12 lg:tw-w-1/2 tw-mx-auto">
        <Text variant="h6" weight="bold" className="tw-mb-4">
          Project Screenshots
        </Text>

        <div className="tw-flex tw-flex-wrap tw--mx-2">
          {project?.images?.map((image, i) => (
            <div
              key={`Project ImageL ${i}`}
              className="tw-w-full lg:tw-w-1/3 tw-mb-4 tw-px-2 tw-cursor-zoom-in"
              onClick={(): void => setActiveImage(i)}
            >
              <LazyLoad>
                <div
                  style={{ backgroundImage: `url("${image.url}")` }}
                  className="tw-pt-11:8 tw-h-0 tw-bg-cover tw-bg-center tw-rounded"
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
