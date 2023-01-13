import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import { DropdownProps } from './Dropdown.types'

const StyledDropdown = styled.select<DropdownProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(props) =>
      props.disabled
        ? '#e4e3ea'
        : props.error
        ? '#a9150b'
        : props.success
        ? '#067d68'
        : '#353637'};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`

const StyledLabel = styled.div<DropdownProps>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? '#e4e3ea' : '#080808')};
  padding-bottom: 6px;
`

const StyledMessage = styled.div<DropdownProps>`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`

const StyledText = styled.p<DropdownProps>`
  margin: 0px;
  color: ${(props) =>
    props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808'};
`

const StyledOptions = styled.option<DropdownProps>``

const Dropdown: FC<DropdownProps> = ({
  id,
  label,
  error,
  message,
  disabled,
  success,
  onChange,
  placeholder,
  options,
  ...props
}) => {
  return (
    <Fragment>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledDropdown
        id={id}
        error={error}
        onChange={onChange}
        disabled={disabled}
        success={success}
        placeholder={placeholder}
        {...props}
      >
        {options?.map((opt) => (
          <StyledOptions key={opt} value={opt}>
            {opt}
          </StyledOptions>
        ))}
      </StyledDropdown>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </Fragment>
  )
}

export default Dropdown
