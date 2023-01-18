import React, { FC } from 'react'
import styled from 'styled-components'
import { HeroProps } from './Hero.types'
import Text from '../Text'
import Button from '../Button'

const StyledHero = styled.div<HeroProps>`
  display: grid;
  color: ${(props) =>
    props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808'};
  background-image: url(${(props) => props.image});
  background-size: cover;
  /* background-size: ${(props) =>
    props.imageWidth && ' ' && props.imageHeight}; */
  width: ${(props) => props.heroWidth};
  height: ${(props) => props.heroHeight};
`

const Hero: FC<HeroProps> = ({
  id,
  headingText,
  subText,
  buttonText,
  error,
  disabled,
  onClick,
}) => {
  return (
    <StyledHero id={id} disabled={disabled} error={error}>
      <Text error={error} disabled={disabled}>
        {headingText}
      </Text>
      <Text error={error} disabled={disabled}>
        {subText}
      </Text>
      <Button onClick={onClick} disabled={disabled}>
        {buttonText}
      </Button>
    </StyledHero>
  )
}

export default Hero
