import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
  }


  render(){
    return(
        <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.titles}</p>
        </div>
    )
  }
}

export default Movie;
