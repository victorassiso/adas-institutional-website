export interface ProtectorProps {
  name: string
  phone: string
  image: string | StaticImageData
}

export interface AnimalProps {
  id: string
  avatar?: string
  name?: string
  sex?: 'male' | 'female'
  size?: 'small' | 'medium' | 'big'
  weight?: number
  address?: string
  protectorName?: string
  contact?: string
}
