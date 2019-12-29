import { random } from '@helpers/utils'

describe('Random Util Helper', () => {
  it('gives a random scoped number', () => {
    const result = random(0, 99)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(99)
  })

  it('fails if given a negative number', () => {
    const t = (): number => random(-1, 100)
    expect(t).toThrowError('Numbers cannot be negative')
  })

  it('fails if first number is greater than second', () => {
    const t = (): number => random(100, 99)
    expect(t).toThrowError('First number is higher than the Second number')
  })
})
