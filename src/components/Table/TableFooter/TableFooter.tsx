import React, { FC } from 'react'
import styled from 'styled-components'
import { TableFooterProps } from './TableFooter.types'

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: green;
`

const StyledTableFooterRow = styled.tr<TableFooterProps>``

const StyledTableFooterCell = styled.th<TableFooterProps>``

const TableFooter: FC<TableFooterProps> = ({ footer }) => {
  return (
    <StyledTableFooter>
      <StyledTableFooterRow>
        {footer?.map((foot) => (
          <StyledTableFooterCell key={foot.name} colSpan={foot.columnSpan}>
            {foot.name}
          </StyledTableFooterCell>
        ))}
      </StyledTableFooterRow>
    </StyledTableFooter>
  )
}

export default TableFooter
