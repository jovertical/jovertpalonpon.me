import Project from '../app/models/Project'
import { getRepository } from '../helpers'
import { Repository } from 'typeorm'

/**
 * Seed sample project data.
 */
export const seedProjects = (): Promise<void> => {
    return getRepository(Project).then((repo: Repository<Project>) => {
        repo.save({
            name: 'Caribbean Waterpark'
        })

        repo.save({
            name: 'Workgalore'
        })
    })
}
