import React, { Component } from "react";

import MovieCard from "./MovieCard";

export default class MovieContainer extends Component {
  state = {
    data: {
      Response: "False"
    }
  };
  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Next Props ",
      nextProps,
      JSON.stringify(nextProps) !== JSON.stringify(this.state)
    );
    if (JSON.stringify(nextProps) !== JSON.stringify(this.state)) {
      this.setState({
        data: this.props.data
      });
      return true;
    } else return false;
  }
  render() {
    const { data } = this.state;
    let content = "";

    content =
      data.Response === "True"
        ? data.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;

    console.log("CONTENT ", content);
    return (
      <div className="row">
        {data.Response === "True"
          ? data.Search.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))
          : null}
      </div>
    );
  }
}
