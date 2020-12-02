import React from 'react';
import { movies } from '../data';



const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <p>{movie.title}</p>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map((genre, index)=> (  //use parentheses for proper return
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
