import * as request from 'supertest'
import { createConnection, Connection, getConnection } from 'typeorm'
import app from '../../bootstrap'

beforeAll(async () => {
    // This is used to avoid time-out errors because the bootstrap file
    // may contain database connection attempts which is asynchronous
    await createConnection('testing')
})

afterAll(async () => {
    const connection: Connection = await getConnection('testing')

    connection.close()
})

describe('Application Endpoints', () => {
    it('should print the welcome message', async () => {
        const res = await request(app).get('/')

        expect(res.status).toEqual(200)
        expect(res.text).toEqual(`Hello! I'm Jovert`)
    })
})
