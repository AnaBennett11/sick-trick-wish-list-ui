import React from 'react';
import "./TrickCard.css";


const TrickCard = ({stance, name, obstacle, tutorial, id}) => {
    return (
        <div className='tricksFlex'>
            <main className='theTrick' key={id}>
                <p>{stance}</p>
                <p>{name}</p>
                <p>{obstacle}</p>
                <p>{tutorial}</p>
                <p>{id}</p>
            </main>
        </div>
    )
}

export default TrickCard;