export function processISODate(dateISO: string) {
  const date = new Date(dateISO)

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${hours}:${minutes}:${seconds}`
}