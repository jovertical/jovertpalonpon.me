import 'reflect-metadata'
import { cleanUpMetadata } from 'inversify-express-utils'
import * as request from 'supertest'
import app from '../../bootstrap'
import Project from '../../app/models/Project'
import { getRepository } from '../../helpers/utils'
import { seedProjects, findProject } from '../utils'

describe('Projects', () => {
  beforeAll(async () => {
    cleanUpMetadata()

    await seedProjects()
  })

  it('should list the projects', async () => {
    await request(app)
      .get('/projects')
      .expect(200)
      .then(response => {
        expect(response.body).toContainEqual(
          expect.objectContaining({ name: 'Workgalore' })
        )
      })
  })

  it('should create a project', async () => {
    await request(app)
      .post('/projects')
      .send({ name: 'Hackdawg' })
      .expect(201)
      .then(response => {
        expect(response.body).toMatchObject({ name: 'Hackdawg' })
      })

    await getRepository(Project)
      .then(repo => repo.find())
      .then(projects => {
        expect(projects).toContainEqual(
          expect.objectContaining({ name: 'Hackdawg' })
        )
      })
  })

  it('should update a project', async () => {
    const project = await findProject()
    const attributes = { name: 'Hope', description: 'Bot that cares' }

    await request(app)
      .patch(`/projects/${project.id}`)
      .send(attributes)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject(attributes)
      })

    await getRepository(Project)
      .then(repo => repo.findOneOrFail(project.id))
      .then((project: Project) => {
        expect(project).toMatchObject(attributes)
      })
  })

  it('should delete a project', async () => {
    const project = await findProject()

    await request(app)
      .delete(`/projects/${project.id}`)
      .expect(200)

    const result = await getRepository(Project).then(repo =>
      repo.findOne(project.id)
    )

    expect(result).toBeUndefined()
  })
})
