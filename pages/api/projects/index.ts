import { NextApiRequest, NextApiResponse } from 'next'
import Project from '@backend/entities/Project'
import Tag from '@backend/entities/Tag'
import connect from '@backend/services/db'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
): Promise<void> => {
  const connection = await connect()
  const projectRepo = connection.getRepository(Project)
  const tagRepo = connection.getRepository(Tag)

  if (typeof req.query.tag === 'string') {
    const tag = await tagRepo.findOne(
      { name: req.query.tag },
      { relations: ['projects'] }
    )

    if (tag) {
      return res.json(tag.projects)
    }
  }

  const projects = await projectRepo.find()
  return res.status(200).json(projects)
}
