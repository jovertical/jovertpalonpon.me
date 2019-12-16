import { Repository } from 'typeorm'
import Project from '../app/models/Project'
import { getRepository, now } from '../helpers/utils'

/**
 * Seed sample project data.
 */
export const seedProjects = (): Promise<void> => {
  return getRepository(Project).then((repo: Repository<Project>) => {
    repo.save({
      name: 'Workgalore',
      startDate: '2019-06-16',
      featuredAt: now()
    })

    repo.save({
      name: 'Caribbean Waterpark',
      startDate: '2018-01-22'
    })
  })
}

/**
 * Find a Project, if no key is specified, give the last one.
 *
 * @param id The key of the model
 */
export const findProject = (id = undefined): Promise<Project> => {
  return getRepository(Project).then((repo: Repository<Project>) => {
    return repo.findOneOrFail(id)
  })
}
