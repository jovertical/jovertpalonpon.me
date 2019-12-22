import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@components/Button'
import Icon from '@components/Icon'
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
          <div className="tw-py-16 tw-bg-blue">
            <div className="lg:tw-w-3/4 tw-mx-auto">
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
              <Text className="tw-text-white tw-h-24">
                {project?.description}
              </Text>
              <div className="tw-flex">
                {project?.sourceUrl && (
                  <ExternalLink href={project?.sourceUrl} variant="custom">
                    <Button variant="secondary">View Source</Button>
                  </ExternalLink>
                )}
              </div>
            </div>
          </div>
          <div className="tw-flex tw-justify-between tw-px-10 tw-py-4 tw-bg-gray-300">
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
              <Icon variant="custom" className="tw-mx-4">
                <FacebookIcon className="facebook-icon tw-rounded-full tw-p-2 tw-bg-gray-500 tw-text-white" />
              </Icon>

              <Icon variant="custom" className="tw-mx-4">
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
