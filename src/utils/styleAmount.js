export function styleAmount (amount) {
  const str = amount.toString()
  const format = str
    .split('')
    .reverse()
    .reduce((acc, curr, index) => {
      if ((index) % 3 === 0 && index !== 1) {
        acc += '.'
      }
      acc += curr
      return acc
    })
    .split('')
    .reverse()
    .join('')

  const res = (str.length >= 7) ? format.replace('.', '\u2019') : format

  return res
}
