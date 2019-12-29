import { truncate } from '@helpers/utils'

describe('Truncate Util Helper', () => {
  it('truncates a given text', () => {
    const subject = 'A very long paragraph that makes no sense'
    const truncated = truncate(subject, 10)
    expect(truncated).toBe('A very lon...')
  })

  it('truncates a given text but appends a custom delimiter', () => {
    const subject = 'Why override, if you can just use the default?'
    const truncated = truncate(subject, 20, '~')
    expect(truncated).toBe('Why override, if you~')
  })
})
