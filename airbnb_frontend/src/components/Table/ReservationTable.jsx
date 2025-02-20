import React from 'react'
import { MaterialReactTable } from 'material-react-table';

const TABLE_HEAD = ["Status", "Date and location", "Host", "Details"]

const ReservationTable = ({ tableRows }) => {
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
      header: "Host",
      accessorKey: "host",
    },
    {
      header: "Details",
      accessorKey: "details",
    },
  ];


  return (
    <div className="w-full h-full">
      <MaterialReactTable
        columns={columns}
        data={tableRows}
        enableColumnFilters
        enablePagination
        enableSorting
      />
    </div>
  );
};



export default ReservationTable
