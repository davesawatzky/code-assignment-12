import React, { FC } from 'react'
import styled from 'styled-components'
import { TableCellProps } from './TableCell.types'

const StyledTableCell = styled.td<TableCellProps>``

const TableCell: FC<TableCellProps> = ({ cellData }) => {
  return <StyledTableCell>{cellData}</StyledTableCell>
}

export default TableCell
