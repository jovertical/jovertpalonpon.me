import React, { useEffect, useState } from 'react'
import Card from '@components/Card'
import Icon from '@components/Icon'
import CalendarIcon from '@components/Icons/Calendar'
import GithubIcon from '@components/Icons/Github'
import LinkIcon from '@components/Icons/Link'
import Layout from '@components/Layout'
import Loader from '@components/Loader'
import Text from '@components/Text'
import { get } from '@helpers/api'

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
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
      <div className="tw-mb-10 tw-py-16 tw-px-5 lg:tw-px-0 tw-text-center tw-bg-blue-500">
        <Text variant="h4" weight="bold" className="tw-text-white tw-mb-5">
          My Projects
        </Text>
        <Text variant="h6" className="tw-text-white">
          Here is a list of projects that I&apos;ve worked on
        </Text>
      </div>

      <div className="tw-w-11/12 lg:tw-w-1/2 tw-mx-auto">
        {loading ? (
          <Loader />
        ) : (
          <div>
            {projects.map(project => (
              <Card
                key={project.id}
                className="tw-flex tw-flex-col lg:tw-flex-row tw-mb-3 lg:tw-mb-5"
              >
                <div className="tw-w-full lg:tw-w-40 tw-mr-5">
                  <img
                    src={project.images?.[0]?.url}
                    alt={project.name}
                    className="tw-h-32 tw-object-cover tw-object-center"
                  />
                </div>

                <div className="tw-relative tw-w-full tw-h-32 tw-mt-2 tw-text-left">
                  <div className="tw-flex tw-justify-between">
                    <a
                      href={`/projects/${project.slug}`}
                      className="hover:tw-text-blue-500"
                    >
                      <Text className="tw-mb-2">{project.name}</Text>
                    </a>

                    <span className="tw-flex">
                      <Icon variant="secondary" className="tw-mr-1">
                        <CalendarIcon />
                      </Icon>
                      <Text>{project.startDate}</Text>
                    </span>
                  </div>
                  <Text variant="sub" className="tw-mb-2">
                    {project.description}
                  </Text>
                  <div className="tw-absolute tw-bottom-0">
                    {project.githubUrl && (
                      <span className="tw-mr-1 lg:tw-mr-2">
                        <a
                          href={project.githubUrl}
                          title="Github Repository"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon variant="secondary">
                            <GithubIcon />
                          </Icon>
                        </a>
                      </span>
                    )}
                    {project.projectUrl && (
                      <span className="tw-mr-1 lg:tw-mr-2">
                        <a
                          href={project.projectUrl}
                          title="Project URL"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon variant="secondary">
                            <LinkIcon />
                          </Icon>
                        </a>
                      </span>
                    )}
                  </div>
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
