import React, { Component } from "react";
import { Route } from "react-router-dom";
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead
        className="thead-dark bg-dark text-white font-weight-bold "
        style={{ cursor: "pointer" }}
      >
        <tr>
          {this.props.columns.map((column) => (
            <td
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {/* {this.renderSortIcon(column)} */}
              {column.label || column.contentDelAll}
            </td>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
