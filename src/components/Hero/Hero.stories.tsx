import React from 'react'
import { Story, Meta } from '@storybook/react'
import Hero from './Hero'
import { HeroProps } from './Hero.types'

export default {
  title: 'Sawatzky/Hero',
  component: Hero,
  argTypes: {
    heroWidth: {
      defaultValue: '100%',
    },
    heroHeight: {
      defaultValue: '500px',
    },
    headingText: {
      defaultValue: 'Hero Title',
    },
    subText: {
      defaultValue: 'Hero SubTitle',
    },
    buttonText: {
      defaultValue: 'Click Here',
    },
    image: {
      defaultValue:
        'https://diatonic.io/wp-content/uploads/2021/10/20170401_160410.jpg',
    },
    imageWidth: {
      defaultValue: '100%',
    },
  },
} as Meta<typeof Hero>

const Template: Story<HeroProps> = (args) => <Hero {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  imageWidth: '50%',
  imageHeight: '200px',
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
