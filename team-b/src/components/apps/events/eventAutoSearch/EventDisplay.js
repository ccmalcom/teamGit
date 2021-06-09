import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 50vh;
    width: 80vw;
    background-color: grey;
    overflow-x: auto;
    margin: auto;
`
const Result = styled.div`
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-evenly
`
const Img = styled.img`
    height: 5em;
    width: 5em;
`

const Section = styled.div`
    width: 30%;
`

const apiKey='oJ0AjAhVVA2AFkcZnb5I5fqjAyMlsev2';
const lat = '39.6962119';
const long = '-86.2632829';

const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&latlong=${lat},${long}&radius=25&unit=miles&locale=*&size=10&page=`


const EventDisplay = () =>{
    const[ results, setResults ] = useState([]);
    const[ pageNumber, setPageNumber ] = useState(0);
    console.log(pageNumber);
    console.log(results);
    
    
    const fetchResults = () =>{
        let url=`${baseUrl}${pageNumber}&sort=date,asc`
        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data._embedded.events))
        .catch(err => console.log(err))
        console.log(url);
    }
    
    const changePageNumber = (e, direction) =>{
        e.preventDefault()
        if(direction === 'down'){
            if(pageNumber > 0){
                setPageNumber(pageNumber - 1);
                fetchResults();
            } else if(pageNumber === 0){
                setPageNumber(pageNumber)
                fetchResults();
            }
        }
        if(direction === 'up'){
            setPageNumber(pageNumber + 1);
            fetchResults();
        }
    }

    useEffect(() => {
        fetchResults();
    }, [])

    return(
        <>
            <Wrapper>
            {results.map(result =>{
                return(
                    <Result>
                        <Section>
                        <h3 id='name'>{result.name}</h3>
                        <p>{result._embedded.venues[0].name}</p>
                        </Section>
                        <Section>
                        <p>{result.dates.start.localDate}</p>
                        <p>{result.distance}mi</p>
                        </Section>
                        <Section>
                            <Img src={result.images[0].url} alt="" />
                        </Section>
                    </Result>
                )
            })}
            </Wrapper>
            <div>
                <button onClick={(e) => changePageNumber(e, 'down')}>Previous 10</button>
                <button onClick={(e) => changePageNumber(e, 'up')}>Next 10</button>
            </div>
        </>
    );
};

export default EventDisplay;