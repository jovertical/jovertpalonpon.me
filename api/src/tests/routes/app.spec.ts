import * as request from 'supertest'
import app from '../../bootstrap'

describe('Application Endpoints', () => {
    it('should print the welcome message', async () => {
        const res = await request(app).get('/')

        expect(res.status).toEqual(200)
        expect(res.text).toEqual(`Nice to meet you! I'm Jovert`)
    })
})
