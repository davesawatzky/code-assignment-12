import React, { FC } from 'react'
import styled from 'styled-components'
import { TableHeaderProps } from './TableHeader.types'

const StyledTableHeader = styled.thead<TableHeaderProps>``

const StyledTableHeaderRow = styled.tr<TableHeaderProps>``

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
