import React from 'react'
import { Story, Meta } from '@storybook/react'
import TableRow from './TableRow'
import { TableRowProps } from './TableRow.types'

export default {
  title: 'Sawatzky/Table/TableRow',
  component: TableRow,
  argTypes: {},
} as Meta<typeof TableRow>

const Template: Story<TableRowProps> = (args) => <TableRow {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
}
