import React, { FC } from 'react'
import styled from 'styled-components'
import { TableProps } from './Table.types'
import TableRow from './TableRow'
import TableCell from './TableCell'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'

const StyledTable = styled.table<TableProps>`
  border: 1px solid black;
`

const StyledTableBody = styled.tbody<TableProps>`
  border: 1px solid black;
`

const Table: FC<TableProps> = ({
  tableHeaderData,
  tableFooterData,
  tableData,
}) => {
  return (
    <StyledTable>
      <TableHeader headings={tableHeaderData}></TableHeader>
      <StyledTableBody>
        {tableData?.map((rowData, i) => (
          <TableRow key={i} rowData={rowData}>
            {rowData?.map((cellData, j) => (
              <TableCell key={j} cellData={cellData}></TableCell>
            ))}
          </TableRow>
        ))}
      </StyledTableBody>
      <TableFooter footer={tableFooterData}></TableFooter>
    </StyledTable>
  )
}

export default Table
