import { category } from '../../types/types.model'

const validName = (name: string): string => {
  if (typeof name === 'string' && name.trim() !== '') { return name }
  throw new Error('The value Name not is defined or missing')
}

export const categoryReqMapped = (data: any): category => {
  const dataMapped: category = {
    name: validName(data.name)
  }
  return dataMapped
}
