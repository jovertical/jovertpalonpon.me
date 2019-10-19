import 'reflect-metadata'
import { cleanUpMetadata } from 'inversify-express-utils'
import * as request from 'supertest'
import app from '../../bootstrap'
import Project from '../../app/models/Project'
import { getRepository } from '../../helpers'
import { seedProjects } from '../utils'

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
                expect(response.body).toContainEqual(expect.objectContaining({ name: 'Workgalore' }))
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
                expect(projects).toContainEqual(expect.objectContaining({ name: 'Hackdawg' }))
            })
    })

    it('should update a project', async () => {
        await request(app)
            .patch('/projects/1')
            .send({ name: 'Hope' })
            .expect(200)
            .then(response => {
                expect(response.body).toMatchObject({ name: 'Hope' })
            })

        await getRepository(Project)
            .then(repo => repo.findOneOrFail(1))
            .then((project: Project) => {
                expect(project).toMatchObject({ name: 'Hope' })
            })
    })

    it('should delete a project', async () => {
        await request(app)
            .delete('/projects/1')
            .expect(200)

        const result = await getRepository(Project).then(repo => repo.findOne(1))

        expect(result).toBeUndefined()
    })
})
