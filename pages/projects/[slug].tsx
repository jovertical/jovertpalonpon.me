import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@components/Button'
import Icon from '@components/Icon'
import AngleLeftIcon from '@components/Icons/AngleLeft'
import AngleRightIcon from '@components/Icons/AngleRight'
import ArrowLeftIcon from '@components/Icons/ArrowLeft'
import ArrowRightIcon from '@components/Icons/ArrowRight'
import FacebookIcon from '@components/Icons/Facebook'
import TwitterIcon from '@components/Icons/Twitter'
import Layout from '@components/Layout'
import Link, { ExternalLink } from '@components/Link'
import Loader from '@components/Loader'
import Text from '@components/Text'
import { get } from '@helpers/api'

const Project: React.FC = () => {
  const router = useRouter()
  const slug = router.query.slug
  const [loading, setLoading] = useState(false)
  const [project, setProject] = useState<Project>()

  useEffect(() => {
    if (typeof slug === 'undefined') {
      return
    }

    setLoading(true)

    get(`/projects/${slug}`)
      .then(({ status, body }) => {
        switch (status) {
          case 200:
            setProject(body)
            break
          default:
            throw new Error(`Error fetching: /projects/${slug}`)
        }
      })
      .finally(() => setLoading(false))
  }, [slug])

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="tw-relative tw-py-16 tw-bg-gradient-r-blue-darker-blue">
            <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-justify-between tw-w-4/5 lg:tw-w-3/4 tw-mx-auto">
              <div className="tw-text-center lg:tw-text-left">
                <Text variant="h4" weight="bold" className="tw-text-white">
                  {project?.name}
                </Text>
                <ExternalLink href={project?.projectUrl} variant="custom">
                  <Text
                    variant="sub"
                    className="tw-text-gray-300 hover:tw-text-gray-100 tw-cursor-pointer tw-mb-5"
                  >
                    {project?.projectUrl}
                  </Text>
                </ExternalLink>
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
            <span className="tw-flex tw-items-center">
              {project?.previousProject !== null && (
                <>
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
                </>
              )}
            </span>

            <div className="tw-flex">
              <Icon variant="custom" size="sm" className="tw-mx-3">
                <FacebookIcon className="facebook-icon tw-rounded-full tw-p-2 tw-bg-gray-500 tw-text-white" />
              </Icon>

              <Icon variant="custom" size="sm" className="tw-mx-3">
                <TwitterIcon className="twitter-icon tw-rounded-full tw-p-2 tw-bg-gray-500 tw-text-white" />
              </Icon>
            </div>

            <span className="tw-flex tw-items-center">
              {project?.nextProject !== null && (
                <>
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
                </>
              )}
            </span>
          </div>
        </>
      )}
    </Layout>
  )
}

export default Project
