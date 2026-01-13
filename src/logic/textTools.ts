export const shortText = (text: string, limit: number) => {
    if (!text) return ''

    let result = text.split(' ').slice(0, 13).join(' ')
    if (result.length > limit) {
      result = result.slice(0, limit) + '...'
    }
    return result
  }