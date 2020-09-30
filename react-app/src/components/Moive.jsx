import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

export default class Moive extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
    };
  }
  deleteMovie = (movie) => {
    console.log(movie);
    alert(`Are you sure to delete ${movie.title}`);
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

  handlerLiked = (movie) => {
    console.log("liked clicked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };

    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies } = this.state;

    if (count === 0) return <p>There is no movie in database</p>;
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

        <table className="table m-5 table-hover shadow">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Like</th>
              <th scope="col">
                <button
                  onClick={() => this.deleteAll(movies)}
                  type="button"
                  className="btn btn-danger btn-sm"
                  style={{ float: "right" }}
                >
                  Delete all
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLikedToggle={() => this.handlerLiked(movie)}
                  />
                </td>
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
