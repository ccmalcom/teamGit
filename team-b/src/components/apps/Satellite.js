import React, {useState, useEffect} from 'react';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'v21c2j0TmMbMfVZZ7zkZxjJhuw274JYPkhUZr87c';
const lon = -86.14;
const lat = 39.79;
const dim = 0.4;
//try dim at 1.25

const Nasa = () => {
    
let url = `${baseURL}?lon=${lon}&lat=${lat}&dim=${dim}&api_key=${key}`;
            
return(
        <div className="main">
            
                Nasa test
                <img src={`${baseURL}?lon=${lon}&lat=${lat}&dim=${dim}&api_key=${key}`} />
            
        </div>
    )
}

export default Nasa;