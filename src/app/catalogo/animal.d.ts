export interface ProtectorProps {
  name: string
  phone: string
  image: string | StaticImageData
}

export interface AnimalProps {
  name: string
  location: string
  sex: 'male' | 'female'
  size: 'small' | 'medium' | 'big'
  weight: number
  images: string[] | StaticImageData[]
  protector: ProtectorProps
}
