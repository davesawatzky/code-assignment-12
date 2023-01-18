import React from 'react'
import { Story, Meta } from '@storybook/react'
import Image from './Image'
import { ImageProps } from './Image.types'

export default {
  title: 'Sawatzky/Image',
  component: Image,
  argTypes: {
    source: {
      defaultValue:
        'https://diatonic.io/wp-content/uploads/2021/10/20170401_160410.jpg',
    },
    width: {
      defaultValue: '100%',
    },
  },
} as Meta<typeof Image>

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  width: '100%',
  height: '',
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  width: '100%',
  height: '',
}
export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  width: '100%',
  height: '',
}