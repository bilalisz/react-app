import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

function Table(props) {
  const { columns, sortColumn, data, onSort, onDeleteAll } = props;

  return (
    <table className="table m-5 table-hover shadow ">
      <TableHeader
        onDeleteAll={onDeleteAll}
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />

      <TableBody data={data} columns={columns} />
    </table>
  );
}

export default Table;
