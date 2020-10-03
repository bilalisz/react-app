import React from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
const MovieTable = (props) => {
  const { movies, onDeleteAll, onDelete, onLiked, onSort } = props;
  return (
    <table className="table m-5 table-hover shadow">
      <TableHeader onDeleteAll={onDeleteAll} onSort={onSort} />
      <tbody>
        {movies.map((movie, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onLikedToggle={() => onLiked(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
                style={{ float: "right" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
