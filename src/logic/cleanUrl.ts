export const cleanUrl = (pathUrl: string) => {
  return `/${pathUrl.split('/').slice(2).join('/')}`
}