import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal",
  "Oldboy",
  "Star wars"
]






class App extends Component {

/*componentWillMount(){
  console.log("will mount");
}

componentDidMount(){
  console.log("did mount");
}*/
state = {
  greeting: "Hello!",
  movies: [
    {

      title: "Matrix",
      poster: "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
    },
    {

      title: "Avengers",
      poster: "http://mblogthumb1.phinf.naver.net/MjAxODA0MjVfOTcg/MDAxNTI0NjYzMTE2MTA1.eHwbsaLucqbmJ-r46JTLiZFoNyRB6lzKSPTPaL1hFxsg.0P4D_k8NkJaZY-m3YIrpez6SBScEIFVMf2L66Rg93bMg.JPEG.eyes2eyes4u/image_1358164111524663104686.jpg?type=w800"
    }
  ]
}

componentDidMount(){
  setTimeout(() => {
    this.setState({
      movies: [

        {
          title: "avengers2",
          poster: "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
        },
          ...this.state.movies,
      ]
    })
  }, 1000)

/*  setTimeout(() => {
    this.setState({
      greeting: "Hello again!"
    })
  }, 5000)*/
}


  render() {

    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}

        <Movie titles={movieTitles[0]} />
        <Movie titles={movieTitles[2]} />
      </div>
    );
  }
}

export default App;
