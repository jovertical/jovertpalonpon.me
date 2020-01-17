/**
 * Shorten a given text
 *
 * @param subject The text to truncate
 * @param limit Length where to cut the text
 * @param delimiter The text to be appended
 */
export const truncate = (
  subject: string,
  limit: number,
  delimiter = '...'
): string => {
  if (subject.length <= limit) {
    return subject
  }

  return subject.slice(0, limit) + delimiter
}

/**
 * Create a randomly scoped number
 *
 * @param min Lowest number to create
 * @param max Highest number to create
 */
export const random = (min: number, max: number): number => {
  if (min < 0 || max < 0) {
    throw new Error('Numbers cannot be negative')
  }

  if (min > max) {
    throw new Error('First number is higher than the Second number')
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Create an array of incremental numbers
 *
 * @param from The number where the range should start.
 * @param to The number where the range should end.
 */
export function* range(from: number, to: number): IterableIterator<number> {
  for (let i = from; i <= to; i++) {
    yield i
  }
}
