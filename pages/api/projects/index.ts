import { NextApiRequest, NextApiResponse } from 'next'
import Project from '@backend/entities/Project'
import connect from '@backend/services/db'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const connection = await connect()
  const projects = await connection.manager.find(Project)

  res.status(200).json(projects)
}
