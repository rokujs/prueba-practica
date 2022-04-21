export function styleDay (data) {
  const options = { month: 'long', day: 'numeric' }
  const date = new Date(data)

  const arrayDate = date.toLocaleDateString('es', options).split(' ')

  return `${arrayDate[2]} ${arrayDate[0]}`
}

export function styleMonth (data) {
  const options = { month: 'long', year: 'numeric' }
  const date = new Date(data)

  const arrayDate = date.toLocaleDateString('es', options).split(' ')

  return `${arrayDate[0]}, ${arrayDate[2]}`
}

export function styleDate (data) {
  const options = { timeZone: 'UTC' }
  const date = new Date(data)

  const arrayDate = date.toLocaleString('es', options).split(' ')

  return `${arrayDate[0].replace(',', '')} - ${arrayDate[1]}`
}
