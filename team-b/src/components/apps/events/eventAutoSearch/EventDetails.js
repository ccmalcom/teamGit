import React, { useState, useEffect } from 'react';

const apiKey='oJ0AjAhVVA2AFkcZnb5I5fqjAyMlsev2';
const lat = '39.6962119';
const long = '-86.2632829';

const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&latlong=${lat},${long}&locale=*`

/*
    This app will display details for selected item: Name, Venue, Address, Date, time, image, link to event page
*/ 

const EventFinder = () =>{
    const[ results, setResults ] = useState('');

    const fetchResults = () =>{
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => setResults(data._embedded.events))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchResults();
    }, [])

    return(
        <div>
            {results.map(result =>{
                return(
                    <div key={result.id}>
                        <h3>{result.name}</h3>
                        <h3>{result._embedded.venues.name}</h3>
                        <h3>{result.dates.start.localDate}</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default EventFinder;