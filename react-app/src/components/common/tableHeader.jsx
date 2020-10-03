import React, { Component } from "react";
class TableHeader extends Component {
  render() {
    const { onSort, onDeleteAll, movies } = this.props;
    return (
      <thead>
        <tr className="bg-dark text-white">
          <th scope="col">#</th>
          <th onClick={() => onSort("title")} scope="col">
            Title
          </th>
          <th onClick={() => onSort("genre.name")} scope="col">
            Genre
          </th>
          <th onClick={() => onSort("numberInStock")} scope="col">
            Stock
          </th>
          <th onClick={() => onSort("dailyRentalRate")} scope="col">
            Rate
          </th>
          <th scope="col">Like</th>
          <th scope="col">
            <button
              onClick={() => onDeleteAll(movies)}
              type="button"
              className="btn btn-danger btn-sm"
              style={{ float: "right" }}
            >
              Delete all
            </button>
          </th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
