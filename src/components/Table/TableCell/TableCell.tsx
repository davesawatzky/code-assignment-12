import React, { FC } from 'react'
import styled from 'styled-components'
import { TableCellProps } from './TableCell.types'

const StyledTableCell = styled.td<TableCellProps>``

const TableCell: FC<TableCellProps> = ({ children, ...props }) => {
  return <StyledTableCell {...props}>{children}</StyledTableCell>
}

export default TableCell
