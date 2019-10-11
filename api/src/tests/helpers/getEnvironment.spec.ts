import { getEnvironment } from '../../helpers'

describe('getEnvironment', () => {
    it('should give the environment', () => {
        expect(getEnvironment()).toBe('testing')
    })

    it('should give the default environment', () => {
        delete process.env.NODE_ENV

        expect(getEnvironment()).toBe('development')
    })
})
