import React from 'react';

export function Card(component) {
    
    const cardStyle = {
        width: '300px',
        height: '400px',
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: 'white',
    };
    return(
        <div style = {cardStyle}>
            <img className='images' src = {component.image}></img>
            <h2>{component.name}</h2>
            <h3>Venue: {component.venue}</h3>
            <h3>Date:{component.date}</h3>
            <a href = {component.link}>
                <button className='btn'>View Detailed Schedule</button>
            </a>
            
        </div> 
    );
}