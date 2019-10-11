import 'reflect-metadata'
import { cleanUpMetadata } from 'inversify-express-utils'
import * as request from 'supertest'
import app from '../../bootstrap'

describe('Application Endpoints', () => {
    beforeEach(() => {
        cleanUpMetadata()
    })

    it('should print the welcome message', async () => {
        const res = await request(app).get('/')

        expect(res.status).toEqual(200)
        expect(res.text).toEqual(`Hello! I'm Jovert`)
    })
})
