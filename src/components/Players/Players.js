import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

import './Players.css';

const Players = () => {
    const [players , setPlayers] = useState([]);
    const [count, setCount] = useState([]);
    
    useEffect(()=>{
        fetch('players.json')
        
        .then(res=> res.json())
        
        .then(data=> setPlayers(data.sports));
        
    } , []);

    const handlerAddToList =(player)=>{
        // console.log(player);
        const newCaunt =[...count,player];
        setCount(newCaunt);
        
    }




    return (
        <div className='players-container'>
            <div className="sports-container">
               {
                players.map(player=> <SinglePlayer 
                handlerAddToList={handlerAddToList}
                player={player}
                ></SinglePlayer>)
               }
            </div>
            <div className="cart-container">
                <Cart count={count}></Cart>
                </div>
        </div>
    );
};

export default Players;