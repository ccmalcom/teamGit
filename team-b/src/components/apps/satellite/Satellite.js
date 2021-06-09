import React from 'react';
import './Satellite.css';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'v21c2j0TmMbMfVZZ7zkZxjJhuw274JYPkhUZr87c';
const lon = -86.14;
const lat = 39.79;
const dim = 0.22;
//try dim at 1.25

const Nasa = () => {

        let url = `${baseURL}?lon=${lon}&lat=${lat}&dim=${dim}&api_key=${key}`;

        return (
                <div className="main">

                        
                        <img src={`${baseURL}?lon=${lon}&lat=${lat}&dim=${dim}&api_key=${key}`} alt='satellite view of your location' />

                </div>
        )
}

export default Nasa;