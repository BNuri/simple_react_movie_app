import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title: "Metrix",
    poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi51L2HuKngAhVFxbwKHZbWCDgQjRx6BAgBEAU&url=https%3A%2F%2Fsteven-universe.fandom.com%2Fwiki%2FLion&psig=AOvVaw0dLvELNKrGNChFqn6NhazH&ust=1549622540747385"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi51L2HuKngAhVFxbwKHZbWCDgQjRx6BAgBEAU&url=https%3A%2F%2Fsteven-universe.fandom.com%2Fwiki%2FLion&psig=AOvVaw0dLvELNKrGNChFqn6NhazH&ust=1549622540747385"
  },
  {
    title: "Oldboy",
    poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi51L2HuKngAhVFxbwKHZbWCDgQjRx6BAgBEAU&url=https%3A%2F%2Fsteven-universe.fandom.com%2Fwiki%2FLion&psig=AOvVaw0dLvELNKrGNChFqn6NhazH&ust=1549622540747385"
  },
  {
    title: "Star wars",
    poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi51L2HuKngAhVFxbwKHZbWCDgQjRx6BAgBEAU&url=https%3A%2F%2Fsteven-universe.fandom.com%2Fwiki%2FLion&psig=AOvVaw0dLvELNKrGNChFqn6NhazH&ust=1549622540747385"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
