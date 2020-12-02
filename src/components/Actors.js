import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
          <div key={index}>
            <p>{actor.name}</p>
            <p>Movies:</p>
            <ul>
              {actor.movies.map((movie, index)=> (  //use parentheses for proper return
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Actors;
