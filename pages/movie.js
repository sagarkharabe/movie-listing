import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import React, { Component } from "react";
import axios from "axios";

const APIKey = "c0ff98a7";
export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {}
    };
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    console.log(this.props.url.query);
    this.fetchMovie(this.props.url.query.id);
  }

  fetchMovie(id) {
    axios
      .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
      .then(response =>
        this.setState({
          loading: false,
          movie: response.data
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    const { loading, movie } = this.state;

    let movieInfo = (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-4 card card-body">
              <img src={movie.Poster} className="thumbnail" alt="Poster" />
            </div>
            <div className="col-md-8">
              <h2 className="mb-4">{movie.Title}</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Genre:</strong> {movie.Genre}
                </li>
                <li className="list-group-item">
                  <strong>Released:</strong> {movie.Released}
                </li>
                <li className="list-group-item">
                  <strong>Rated:</strong> {movie.Rated}
                </li>
                <li className="list-group-item">
                  <strong>IMDB Rating:</strong> {movie.imdbRating}
                </li>
                <li className="list-group-item">
                  <strong>Director:</strong> {movie.Director}
                </li>
                <li className="list-group-item">
                  <strong>Writer:</strong> {movie.Writer}
                </li>
                <li className="list-group-item">
                  <strong>Actors:</strong> {movie.Actors}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="card card-body bg-dark my-5 text-light">
              <div className="col-md-12">
                <h3>About </h3>
                {movie.Plot}
                <hr />
                <a
                  href={"https://www.imdb.com/title/" + movie.imdbID}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on IMDB
                </a>
                {/* <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );

    let content = loading ? <Spinner></Spinner> : movieInfo;
    return <div>{content}</div>;
  }
}
