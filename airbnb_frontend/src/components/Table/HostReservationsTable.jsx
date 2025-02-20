import React from 'react'
import { MaterialReactTable } from 'material-react-table';

const HostReservationsTable = ({ tableRows }) => {
  const columns = [
    {
        header: "Status",
        accessorKey: "status",
    },
    {
        header: "Date and location",
        accessorFn: (row) => row.dateAndLocation,
    },
    {
        header: "Guest",
        accessorKey: "guest",
    },
    {
        header: "Details",
        accessorKey: "details",
    }
  ]

  return (
    <div className='w-full h-full'>
      <MaterialReactTable
        columns={columns}
        data={tableRows}
        enableColumnFilters
        enablePagination
        enableSorting
      />
    </div>
  )
}

export default HostReservationsTable
