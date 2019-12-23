import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import Card from '@components/Card'
import Layout from '@components/Layout'
import Loader from '@components/Loader'
import Link from '@components/Link'
import Text from '@components/Text'
import { get } from '@helpers/api'

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    get('/projects').then(({ status, body }) => {
      switch (status) {
        case 200:
          setProjects(body)
          break
        default:
          throw new Error('Error fetching: /projects')
      }

      setLoading(false)
    })
  }, [])

  return (
    <Layout>
      <div className="tw-mb-10 tw-py-16 tw-px-5 lg:tw-px-0 tw-text-center tw-bg-blue">
        <Text variant="h4" weight="bold" className="tw-text-white tw-mb-5">
          My Projects
        </Text>
        <Text variant="h6" className="tw-text-white">
          Here is a list of projects that I've worked on
        </Text>
      </div>

      <div className="tw-w-11/12 lg:tw-w-1/2 tw-mx-auto">
        {loading ? (
          <Loader />
        ) : (
          <div>
            {projects.map((project, i) => (
              <Card
                key={project.id}
                className="tw-flex tw-flex-col lg:tw-flex-row tw-mb-3 lg:tw-mb-5"
              >
                <div className="tw-w-full lg:tw-w-64 tw-mb-5 lg:tw-mb-0 tw-mr-5">
                  <LazyLoad>
                    <div
                      className="tw-w-full tw-h-0 tw-pt-11:8 tw-bg-cover tw-bg-center"
                      style={{
                        backgroundImage: `url('${project.images?.[0]?.url}')`
                      }}
                    />
                  </LazyLoad>
                </div>

                <div className="tw-relative tw-w-full tw-h-32 tw-text-left">
                  <div className="tw-flex tw-justify-between">
                    <Link
                      href="/projects/[slug]"
                      as={`/projects/${project.slug}`}
                    >
                      <Text weight="bold" className="tw-mb-2">
                        {project.name}
                      </Text>
                    </Link>
                  </div>
                  <Text variant="sub" className="tw-mb-2">
                    {project.description}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Projects
