import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = (props) => {
    const {handlerAddToList, SinglePlayer} =props;
    const {id,strFormat,strSport,strSportThumb,time} = props.player;

    

    return (
        <div className='player'>
            <img src={strSportThumb} alt="" />
            <h4>Sports Name:{strSport}</h4>
            <p>Id:{id}</p>
            <p><small>Team Name:{strFormat}</small></p>
            <p>Time:{time}m</p>
            
            <button onClick={() => props.handlerAddToList(props.player)} className='btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default SinglePlayer;