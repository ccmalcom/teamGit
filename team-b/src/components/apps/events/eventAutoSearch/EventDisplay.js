import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 50vh;
    width: 80vw;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    overflow-x: auto;
    margin: auto;
    margin-top: 5vh
`
const Result = styled.div`
    border: 1px solid #1F262D;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 5%;
    color: white;

`
const Img = styled.img`
    height: 5em;
    width: 5em;
`

const Section = styled.div`
    width: 25%;
    
`

const Details = styled.div`
    width: 10%;
`

const Button = styled.button`
    border: none;
    border-radius: 20px;
    height: 3em;
    width: 6em;
    background-color:#FFE733;
    cursor: pointer;
    &:hover{
        background-color: #BFAD26
        ;
    }
    font-family: sans-serif;
    letter-spacing: 1px;
    text-align: center;
    `
    const PagButton = styled.button`
    border: none;
    height: 3em;
    width: 50%;
    background-color:#FFEB33;
    border-left: 1px solid white;
    border-right: 1px solid white;
    cursor: pointer;
    &:hover{
        background-color: #BFAD26
        ;
    }
`
const PaginationDiv = styled.div`
    display: flex;
    align-items: center;
    width: 80vw;
    justify-content: space-between;
    margin: auto
`

const apiKey='oJ0AjAhVVA2AFkcZnb5I5fqjAyMlsev2';
// const lat = '39.6962119';
// const long = '-86.2632829';

const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}`


const EventDisplay = (props) =>{
    const[ results, setResults ] = useState([]);
    const[ pageNumber, setPageNumber ] = useState(0);
    const location = props.location;
    console.log('location:', location)
    console.log(pageNumber);
    console.log(results);
    
    // ! do not reload page! if failure to compile, change location.coordinates.lat to lat, same with long, save, then put it back in
    const fetchResults = () =>{
        let url=`${baseUrl}&latlong=${location.coordinates.lat},${location.coordinates.long}&radius=25&unit=miles&locale=*&size=10&page=${pageNumber}&sort=date,asc`
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

    // useEffect(() => {
    //     fetchResults();
    // }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setPageNumber(0);
        fetchResults();
    }

    return(
        <>
            <Wrapper>
                {results.length === 0? <Button onClick= {(e) => handleSubmit(e)}>Find Events</Button> : null}
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
                        <Details>
                            <a href={result.url} target='_blank' rel='noreferrer'><Button>Details</Button></a>
                        </Details>
                    </Result>
                )
            })}
            </Wrapper>
                {results.length > 0 ? 
                <PaginationDiv>
                <PagButton onClick={(e) => changePageNumber(e, 'down')}>Previous 10</PagButton>
                <PagButton onClick={(e) => changePageNumber(e, 'up')}>Next 10</PagButton></PaginationDiv> : null}
        </>
    );
};

export default EventDisplay;