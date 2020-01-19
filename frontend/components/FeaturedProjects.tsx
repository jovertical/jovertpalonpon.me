import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import Button from '@frontend/components/Button'
import Loader from '@frontend/components/Loader'
import Link from '@frontend/components/Link'
import Text from '@frontend/components/Text'
import { get } from '@frontend/helpers/api'

const limit = 3

const FeaturedProjects = (): React.ReactElement => {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setLoading(true)

    get('/projects', { featured: '' }).then(({ status, body }) => {
      switch (status) {
        case 200:
          setProjects(body)
          break
        default:
          throw new Error('Error fetching: /projects?featured')
      }

      setLoading(false)
    })
  }, [])

  return (
    <>
      <div>
        <Text variant="h5" weight="bold" className="mb-10">
          Featured Projects
        </Text>
        {loading ? (
          <Loader />
        ) : (
            <>
              {projects.length === 0 ? (
                <Text>
                  No Projects Featured.{' '}
                  <Link href="/projects" className="text-blue">
                    View All
                </Link>
                </Text>
              ) : (
                  <div className="flex flex-wrap -mx-2 mb-10">
                    {projects.slice(0, limit).map(project => (
                      <div
                        key={project.id}
                        className="project w-full lg:w-1/3 px-2 mb-5"
                      >
                        <LazyLoad>
                          <div
                            className="content w-full h-0 pt-16:9 relative bg-cover bg-center rounded-lg hover:bg-gray-800"
                            style={{
                              backgroundImage: `url("${project.image?.url ??
                                '/svg/portfolio_essv.svg'}")`
                            }}
                          >
                            <div className="details hidden flex-col justify-center items-center absolute inset-0 w-full h-full p-10">
                              <p className="text-white mb-5">
                                {project.description}
                              </p>

                              <Link
                                href="/projects/[slug]"
                                as={`/projects/${project.slug}`}
                                variant="custom"
                              >
                                <Button variant="secondary">View Project</Button>
                              </Link>
                            </div>
                          </div>
                        </LazyLoad>
                      </div>
                    ))}
                  </div>
                )}

              {projects.length > limit && (
                <div className="w-full">
                  <Link href="/projects">
                    <Button>View All</Button>
                  </Link>
                </div>
              )}
            </>
          )}
      </div>

      <style jsx>{`
        .project .content:hover {
          background-image: none !important;
        }

        .project .content:hover .details {
          display: flex;
        }
      `}</style>
    </>
  )
}

export default FeaturedProjects
