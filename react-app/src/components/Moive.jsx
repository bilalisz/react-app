import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export default class Moive extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
    };
  }
  deleteMovie = (movie) => {
    console.log(movie);
    alert("are you sure" + " " + " " + movie.title + " " + "movie");
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies,
    });
  };

  deleteAll = () => {
    alert("are you sure");
    const delMovies = this.state.movies.filter((m) => m._id !== m._id);

    this.setState({
      movies: delMovies,
    });
  };

  render() {
    const { length: count } = this.state.movies;
    const allMovies = this.state.movies;

    if (count === 0) return <p>There is no moive in database</p>;
    return (
      <div>
        <h2 className="ml-5">
          Showing Movies from <big>API</big>
        </h2>
        <p
          style={{ color: "white", textAlign: "center" }}
          className="ml-5 border bg-success "
        >
          Showing {count} moives in database
        </p>

        <table className="table m-5 table-hover">
          <thead style={{ fontWeight: "bold" }}>
            <td>#</td>
            <td>Title</td>
            <td>Genre</td>
            <td>Stock</td>
            <td>Rate</td>
            <th>
              <button
                onClick={() => this.deleteAll(allMovies)}
                type="button"
                className="btn btn-danger btn-sm"
                style={{ float: "right" }}
              >
                Delete all
              </button>
            </th>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <tr key={movie._id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie)}
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
      </div>
    );
  }
}
