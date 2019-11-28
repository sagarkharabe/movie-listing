import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import MovieContainer from "../components/MovieContainer";
import axios from "axios";

const APIKey = "c0ff98a7";
export default class Index extends React.Component {
  state = {
    data: { Response: "False" }
  };
  fetchMovies(text) {
    axios
      .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
      .then(response =>
        this.setState(
          {
            data: response.data
          },
          () => console.log(this.state)
        )
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Layout>
        <div>
          <h1>Welcome to Movie Listings</h1>
          <p>Movie Listings fetches a list of movies</p>
        </div>
        <SearchBar fetchMovies={text => this.fetchMovies(text)} />
        <MovieContainer data={this.state.data} />
      </Layout>
    );
  }
}
