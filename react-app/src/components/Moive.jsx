import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieTable from "../components/movieTable";
import Pagination from "./common/pagination";
import { paginate } from "../ulits/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

export default class Moive extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genre: [],
      pageSize: 4,
      currentPage: 1,
      sortColumn: { path: "title", order: "asc" },
    };
  }

  componentDidMount() {
    const genre = [{ name: "All Genre" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genre,
    });
  }
  deleteMovie = (movie) => {
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
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };

    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  pageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handelerGenreSelect = (genre) => {
    console.log(genre);

    this.setState({
      selectedGenre: genre,
      currentPage: 1,
    });
  };

  handlerSorting = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({
      sortColumn,
    });
    console.log(sortColumn);
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: allmovies,
      selectedGenre,
      genre,
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allmovies.filter((m) => m.genre._id === selectedGenre._id)
        : allmovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    if (count === 0) return <p>There is no movie in database</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genre}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handelerGenreSelect}
          />
        </div>
        <div className="col">
          <h2 className="ml-5">
            Showing Movies from <big>API</big>
          </h2>
          <p
            style={{ color: "white", textAlign: "center" }}
            className="ml-5 border bg-success "
          >
            Showing {filtered.length} moives in database
          </p>

          <MovieTable
            movies={movies}
            onDelete={this.deleteMovie}
            onDeleteAll={this.deleteAll}
            onLiked={this.handlerLiked}
            onSort={this.handlerSorting}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.pageChange}
          />
        </div>
      </div>
    );
  }
}
