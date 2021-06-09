import React, {useEffect, useState} from 'react';


const WeatherApp = () => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const key = '5cb0082a663be375f7d12c74f060790f';
    
    const [results, setResults] = useState({});
    console.log(results.weather);
    console.log(results.main);

    let lat = '39.778846944988736'; 
    let lon = '-86.12407252328583';
    
    const fetchResults = () => {
        let url = `${baseURL}?lat=${lat}&lon=${lon}&appid=${key}`;
        console.log(url)

        fetch(url)
        .then((res) => {
            console.log(res);
            res.json();})
        
        .then((data) => {
            console.log(data);
            // setResults(data)
        })
        .catch((err) => console.log(err));
    }
    
    const testing = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=${key}`).then((res) => res.json()).then((data) => {
            console.log(data);
            setResults(data);
        })
    }





    useEffect(() => {
        // fetchResults();
        testing();
    },[]);

    return(
        <div>

<h3>{results.main.humidity}</h3>
<h3>{results.main.temp}</h3>
<h3>{results.main.pressure}</h3>
{/*             
            {results.weather.map((item, index) => (
                <>
                <h1>{item.description}</h1>
                <h1>{results.main.temp}</h1>
                </>
            ))} */}
            {/* {results.map(result => {
                return(
                    <div>
                        <h3>Hello</h3>
                        <h3>{result.weather}</h3>
                        <h3>{result.main.temp}</h3>
                        <h3>{result.main.feels_like}</h3>
                    </div>
                )
            })} */}

            <h3>Hello</h3>
        </div>
    )
}

export default WeatherApp;