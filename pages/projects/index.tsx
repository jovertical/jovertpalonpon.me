import React from 'react'
import { NextPage } from 'next'
import LazyLoad from 'react-lazyload'
import Button from '@frontend/components/Button'
import Card from '@frontend/components/Card'
import Layout from '@frontend/components/Layout'
import Link from '@frontend/components/Link'
import SEO from '@frontend/components/SEO'
import Text from '@frontend/components/Text'
import { get } from '@frontend/helpers/api'
import { truncate } from '@frontend/helpers/utils'

interface Props {
  projects: Project[]
  seo: SEO
}

const Projects: NextPage<Props> = ({ projects, seo }) => {
  return (
    <Layout>
      <SEO {...seo} />
      <div className="tw-mb-10 tw-py-16 tw-px-5 lg:tw-px-0 tw-text-center tw-bg-blue">
        <Text variant="h4" weight="bold" className="tw-text-white tw-mb-5">
          My Projects
        </Text>
        <Text variant="h6" className="tw-text-white">
          Here is a list of projects that I've worked on
        </Text>
      </div>

      <div className="tw-w-11/12 md:tw-w-3/4 lg:tw-w-1/2 tw-mx-auto">
        <div>
          {projects.map(project => (
            <Card
              key={project.id}
              className="tw-flex tw-flex-col lg:tw-flex-row tw-mb-3 lg:tw-mb-5"
            >
              <div className="tw-w-full lg:tw-w-84 tw-mb-5 lg:tw-mb-0 tw-mr-5">
                <LazyLoad>
                  <div
                    className="tw-w-full tw-h-0 tw-pt-11:8 tw-bg-cover tw-bg-center"
                    style={{
                      backgroundImage: `url('${project.image?.url}')`
                    }}
                  />
                </LazyLoad>
              </div>

              <div className="tw-relative tw-w-full tw-text-left">
                <div className="tw-flex tw-justify-between">
                  <Text weight="bold">{project.name}</Text>
                </div>
                <div className="tw-flex tw-flex-wrap tw--mx-2 tw-mb-2">
                  {project?.tags?.map(tag => (
                    <Link
                      key={tag.id}
                      href={`/projects?tag=${tag.name}`}
                      className="tw-mx-1 tw-mt-2 tw-px-2 tw-rounded-full tw-bg-gray-300"
                      variant="custom"
                    >
                      <Text
                        variant="sub"
                        className="tw-text-gray-700 hover:tw-text-blue"
                      >
                        {tag.name}
                      </Text>
                    </Link>
                  ))}
                </div>
                <Text variant="sub" className="lg:tw-h-20 tw-mb-4 lg:tw-mb-0">
                  {truncate(project.description, 50)}
                </Text>
                <div className="tw-flex lg:tw-absolute lg:tw-bottom-0 lg:tw-right-0">
                  <Link
                    href="/projects/[slug]"
                    as={`/projects/${project.slug}`}
                    variant="custom"
                    className="tw-w-full"
                  >
                    <Button className="tw-w-full">View Project</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

Projects.getInitialProps = async ({ query, req }): Promise<Props> => {
  const tag = query?.tag
  const { status, body } = await get('/projects', { tag })

  return {
    projects: status === 200 ? body : [],
    seo: {
      title: `Jovert's Projects ${tag ? '#' + tag.toString() : ''}`,
      description:
        'Here is a list of projects I created and/or contributed to, from open source tools, start-up projects and corporate software.',
      url: `${req?.headers?.['x-forwarded-proto']}://${req?.headers?.['x-forwarded-host']}/projects`
    }
  }
}

export default Projects
