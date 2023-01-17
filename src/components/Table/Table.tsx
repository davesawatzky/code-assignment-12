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
const TableBody: FC<TableProps> = ({ error, disabled, children }) => {
  return (
    <StyledTableBody error={error} disabled={disabled}>
      {children}
    </StyledTableBody>
  )
}

const Table: FC<TableProps> = ({
  tableHeaderData,
  tableFooterData,
  tableData,
  error,
  disabled,
}) => {
  return (
    <StyledTable error={error} disabled={disabled}>
      <TableHeader headings={tableHeaderData}></TableHeader>
      <TableBody error={error} disabled={disabled}>
        {tableData?.map((rowData, i) => (
          <TableRow key={i}>
            {rowData.map((cellData, j) => (
              <TableCell key={j}>{cellData}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter footer={tableFooterData}></TableFooter>
    </StyledTable>
  )
}

export default Table
