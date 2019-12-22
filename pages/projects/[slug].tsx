import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@components/Button'
import Layout from '@components/Layout'
import { ExternalLink } from '@components/Link'
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
        <div className="tw-mb-10 tw-py-16 tw-bg-blue">
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
      )}
    </Layout>
  )
}

export default Project
