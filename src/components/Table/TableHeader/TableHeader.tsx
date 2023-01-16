import React, { FC } from 'react'
import styled from 'styled-components'
import { TableHeaderProps } from './TableHeader.types'

const StyledTableHeader = styled.thead<TableHeaderProps>`
  border: 1px solid black;
  background-color: aqua;
`

const StyledTableHeaderRow = styled.tr<TableHeaderProps>`
  border: 1px solid black;
`

const StyledTableHeaderCell = styled.th<TableHeaderProps>``

const TableHeader: FC<TableHeaderProps> = ({ headings }) => {
  return (
    <StyledTableHeader>
      <StyledTableHeaderRow>
        {headings?.map((heading) => (
          <StyledTableHeaderCell
            key={heading.name}
            colSpan={heading.columnSpan}
          >
            {heading.name}
          </StyledTableHeaderCell>
        ))}
      </StyledTableHeaderRow>
    </StyledTableHeader>
  )
}

export default TableHeader
