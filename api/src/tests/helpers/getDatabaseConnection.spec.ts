import { getDatabaseConnection } from '../../helpers'

describe('getDatabaseConnection', () => {
    it('should give the database connection name', () => {
        expect(getDatabaseConnection()).toBe('testing')
    })

    it('should give the default name', () => {
        delete process.env.NODE_ENV

        expect(getDatabaseConnection()).toBe('default')
    })
})
