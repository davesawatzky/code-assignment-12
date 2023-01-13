import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import Input from './Input'

describe('Running Test for sawatzky Input', () => {
  test('Check placeholder in Input', () => {
    render(<Input placeholder='sawatzky' />)
    expect(screen.getByPlaceholderText('sawatzky')).toHaveAttribute(
      'placeholder',
      'sawatzky'
    )
  })

  test('renders the Input component', () => {
    render(<Input placeholder='sawatzky' />)
    const input = screen.getByPlaceholderText('sawatzky') as HTMLInputElement
    userEvent.type(input, 'Hello world!')
    expect(input.value).toBe('Hello world!')
  })
})
