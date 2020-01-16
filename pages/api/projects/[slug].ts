import { NextApiRequest, NextApiResponse } from 'next'
import Project from '@backend/entities/Project'
import connect from '@backend/services/db'

interface Data extends Project {
  previousProject: Project
  nextProject: Project
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const connection = await connect()
  const projectRepo = connection.getRepository(Project)

  const projects = await projectRepo.find()
  const project = await projectRepo.findOneOrFail({
    slug: typeof req.query.slug === 'string' ? req.query.slug : ''
  })
  const i = projects.findIndex(p => p.id === project.id)

  return res.json({
    ...project,
    previousProject: i > 0 ? projects[i - 1] : null,
    nextProject: i + 1 < projects.length ? projects[i + 1] : null
  })
}
