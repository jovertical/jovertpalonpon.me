import { range } from '@frontend/helpers/utils'

describe('Range Util Helper', () => {
  it('gives an incremental array of numbers', () => {
    const result = range(0, 4)
    const subject = Array.from(result)

    expect(subject.length).toBe(5)
    expect(subject[0]).toBe(0)
    expect(subject.reverse()[0]).toBe(4)
  })

  it('gives an empty array if first number is greather than the second', () => {
    const result = range(100, 99)
    const subject = Array.from(result)

    expect(subject.length).toBe(0)
  })
})
