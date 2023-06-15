// utility functions used by currently just the star-history.ts file

/** Function generates an array of numbers within a given range
 * This is needed to only reconstruct the star history from some specific points in the history
 * And not from looking at every single star recorded
 * @param {number} from
 * @param {number} to
 * @returns Array<number>: An array of numbers within the specified range.
 */
export function range(from: number, to: number): number[] {
  const r: number[] = []
  for (let i = from; i <= to; i++) {
    r.push(i)
  }
  return r
}

/** Retuns the timestamp of a given date
 * @param {Date | number | string} t - Date, timestamp or string
 * @returns Timestamp of the given date
 */
export function getTimeStampByDate(t: Date | number | string): number {
  return new Date(t).getTime()
}

/** Formats a date into a string using the specified format
 * @param {Date | number | string} t
 * @param {string} format - The format string for the desired date format.
 * Default is "yyyy/MM/dd hh:mm:ss".
 * @returns Formatted string
 */
export function getDateString(t: Date | number | string, format = 'yyyy/MM/dd hh:mm:ss'): string {
  const d = new Date(getTimeStampByDate(t))

  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()

  return format
    .replace('yyyy', String(year))
    .replace('MM', String(month))
    .replace('dd', String(date))
    .replace('hh', String(hours))
    .replace('mm', String(minutes))
    .replace('ss', String(seconds))
}
