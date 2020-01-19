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
      <div className="mb-10 py-16 px-5 lg:px-0 text-center bg-blue">
        <Text variant="h4" weight="bold" className="text-white mb-5">
          My Projects
        </Text>
        <Text variant="h6" className="text-white">
          Here is a list of projects that I've worked on
        </Text>
      </div>

      <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
        <div>
          {projects.map(project => (
            <Card
              key={project.id}
              className="flex flex-col lg:flex-row mb-3 lg:mb-5"
            >
              <div className="w-full lg:w-84 mb-5 lg:mb-0 mr-5">
                <LazyLoad>
                  <div
                    className="w-full h-0 pt-11:8 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${project.image?.url}')`
                    }}
                  />
                </LazyLoad>
              </div>

              <div className="relative w-full text-left">
                <div className="flex justify-between">
                  <Text weight="bold">{project.name}</Text>
                </div>
                <div className="flex flex-wrap -mx-2 mb-2">
                  {project?.tags?.map(tag => (
                    <Link
                      key={tag.id}
                      href={`/projects?tag=${tag.name}`}
                      className="mx-1 mt-2 px-2 rounded-full bg-gray-300"
                      variant="custom"
                    >
                      <Text
                        variant="sub"
                        className="text-gray-700 hover:text-blue"
                      >
                        {tag.name}
                      </Text>
                    </Link>
                  ))}
                </div>
                <Text variant="sub" className="lg:h-20 mb-4 lg:mb-0">
                  {truncate(project.description, 50)}
                </Text>
                <div className="flex lg:absolute lg:bottom-0 lg:right-0">
                  <Link
                    href="/projects/[slug]"
                    as={`/projects/${project.slug}`}
                    variant="custom"
                    className="w-full"
                  >
                    <Button className="w-full">View Project</Button>
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
