import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css';

const Players = () => {
    const [players , setPlayers] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        
        .then(res=> res.json())
        
        .then(data=> setPlayers(data.sports));
        
    } , [])


    return (
        <div className='players-container'>
            <div className="sports-container">
               {
                players.map(player=> <SinglePlayer 
                   
                player={player}
                ></SinglePlayer>)
               }
            </div>
            <div className="cart-container">
                <h2>My name is .....</h2>
            </div>

        </div>
    );
};

export default Players;