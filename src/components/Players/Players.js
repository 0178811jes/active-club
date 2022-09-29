import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
        console.log(newCaunt)
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
            <div>
                    <h4>Jesmin Ara</h4>
                    <p>I lives in Dhaka</p>
                    <p>My home district in Rajshahi</p>
                </div>
                <div>
                    <h4>Add A Break</h4>
                    <div className='add-break'>
                        <button>10m</button>
                        <button>5m</button>
                        <button>15m</button>
                        <button>20m</button>

                    </div>
                <div>
                        <h2>Exercise Details</h2>
                        <div>
                            <h4>Exercise Time:{count.length}</h4>

                            <h4>Break Time:</h4>
                        </div>
                        <button className='btn-activity'>
                            <p>Activity Complited</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;