import { MouseEventHandler } from 'react'

export interface HeroProps {
  id?: string
  error?: boolean
  disabled?: boolean
  image?: string
  video?: string
  headingText?: string
  subText?: string
  buttonText?: string
  heroWidth?: string
  heroHeight?: string
  imageWidth?: string
  imageHeight?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
