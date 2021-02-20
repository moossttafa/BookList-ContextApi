import React, { useState } from 'react'

function MoveList() {

    const [movies , setMovies] = useState([

        {
            name: 'Harypoter',
            price: '15$',
            id: 2354
        },
        {
            name: 'Harypoter',
            price: '15$',
            id: 2354
        },
         {
            name: 'Harypoter',
            price: '15$',
            id: 2354
        }
    ]);


    return (
        <div>
            {movies.map(movie => (
                <li>{movie.name}</li>
            ))}
        </div>
    );
};

export default MoveList
