import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@components/Button'
import Loader from '@components/Loader'
import { get } from '@helpers/api'

const limit = 3

const FeaturedProjects = () => {
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
        <h1 className="tw-font-bold tw-text-2xl tw-mb-10">Featured Projects</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            {projects.length === 0 ? (
              <p>
                No Projects Featured.{' '}
                <a
                  href="/projects"
                  className="tw-text-blue-500 hover:tw-text-blue-400"
                >
                  View All?
                </a>
              </p>
            ) : (
              <div className="tw-flex tw-flex-wrap tw--mx-2 tw-mb-10">
                {projects.slice(0, limit).map(project => (
                  <div
                    key={project.id}
                    className="project tw-w-full lg:tw-w-1/3 tw-px-2 tw-mb-5"
                  >
                    <div
                      className="content tw-w-full tw-h-0 tw-pt-16:9 tw-relative tw-bg-cover tw-bg-center tw-rounded-lg hover:tw-bg-gray-800"
                      style={{
                        backgroundImage: `url("${project.images?.[0]?.url ??
                          '/svg/portfolio_essv.svg'}")`
                      }}
                    >
                      <div className="details tw-hidden tw-flex-col tw-justify-center tw-items-center tw-absolute tw-inset-0 tw-w-full tw-h-full tw-p-10">
                        <p className="tw-text-white tw-mb-5">
                          {project.description}
                        </p>

                        <Link href={`/projects/${project.uuid}`}>
                          <Button>
                            <p className="tw-text-white">View Project</p>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {projects.length > limit && (
              <div className="tw-w-full">
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