import React, { FC } from 'react'
import styled from 'styled-components'
import { ImageProps } from './Image.types'

const StyledFigure = styled.figure<ImageProps>`
  border: 1px solid black;
  padding: 10px;
`

const StyledImage = styled.img<ImageProps>`
  color: ${(props) =>
    props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808'};
`
const StyledFigCaption = styled.figcaption<ImageProps>``

const Image: FC<ImageProps> = ({
  source,
  caption,
  id,
  error,
  disabled,
  width,
  height,
  ...props
}) => {
  return (
    <StyledFigure>
      <StyledImage
        src={source}
        id={id}
        width={width}
        height={height}
        disabled={disabled}
        error={error}
        {...props}
      ></StyledImage>
      <StyledFigCaption>{caption}</StyledFigCaption>
    </StyledFigure>
  )
}

export default Image
