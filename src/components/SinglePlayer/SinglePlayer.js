import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = (props) => {
    console.log(props.player);
    const {idSport,strFormat,strSport,strSportThumb} = props.player;
    return (
        <div className='player'>
            <img src={strSportThumb} alt="" />
            <h4>Sports Name:{strSport}</h4>
            <p>Id:{idSport}</p>
            <p><small>Team Name:{strFormat}</small></p>
            
            <button className='btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default SinglePlayer;