/**
 * Create a randomly scoped number
 *
 * @param min Lowest number to create
 * @param max Highest number to create
 */
export function random(min: number, max: number): number {
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
