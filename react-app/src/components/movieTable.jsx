import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MovieTable extends Component {
  columns = [
    // { key: "#", label: "#" },
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      label: "Like",
      contant: (movie) => (
        <Like
          liked={movie.liked}
          onLikedToggle={() => this.props.onLiked(movie)}
        />
      ),
    },
    {
      key: "deleteall",
      contentDelAll: (
        <button
          className="btn btn-danger btn-sm "
          onClick={() => this.props.onDeleteAll()}
        >
          Delete all
        </button>
      ),
    },

    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
          style={{ float: "right" }}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onDeleteAll, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        onDeleteAll={onDeleteAll}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MovieTable;
