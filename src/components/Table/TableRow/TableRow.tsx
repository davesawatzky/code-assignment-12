import React, { FC } from 'react'
import styled from 'styled-components'
import { TableRowProps } from './TableRow.types'

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: red;
`

const TableRow: FC<TableRowProps> = ({ rowData }) => {
  return <StyledTableRow>{rowData}</StyledTableRow>
}

export default TableRow
