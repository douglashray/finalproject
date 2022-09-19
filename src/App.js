import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Table, Button, Image, Container, Row, Col, Form } from 'react-bootstrap';
// import styled from "styled-components";
import React, { useEffect } from 'react';
import { fetchTeam, fetchGames, fetchAirportDestination, fetchHotelDestination, fetchDeparture, fetchFlights  } from './actions';
import './index.css';
// import TeamDetails from './components/teamdetails';

function App () {
  const team = useSelector((state) => state.team);
  const games = useSelector((state) => state.games);
  const destination = useSelector((state) => state.destination);
  const departure = useSelector((state) => state.departure);
  const hotelLocation = useSelector((state) => state.location);
  const flights = useSelector((state) => state.flights);
  const hotels = useSelector((state) => state.hotels);
  const utc = new Date();
  const tripDetails = {
    team: '',
    teamId: '',
    teamVenue: '',
    departureCity: '',
    departureDate: '',
    returnDate: '',
    destination: '',

  }
  // let destinationTest = team[0].city;
  console.log('tripDetails'+ JSON.stringify(tripDetails));

  const dispatch = useDispatch();
  
  // console.log(destinationTest);

  // useEffect(() => {
  //   if(!tripDetails.teamId) {
  //     console.log('none');
  //   } else {
      
  //   console.log('useEffect' + tripDetails.teamId);
  //   // dispatch(fetchGames(42, 494);
  //   }
  // }, []);
  
  // const searchDeparture = (event) => {
  //   console.log(event);
  //   event.preventDefault();

  //   // const departurecity = event.getElementById['departure'].value;
  //   const departurecity = 'denver';

  //   if(!event) {
  //     console.log('waiting for search');
  //   } else {
  //     dispatch(fetchAirportDestination('London'))
      
  //     dispatch(fetchDeparture(departurecity))
  //   }
  // }

  const Team = (props) => {
    // console.log('props' + JSON.stringify(props.id) + JSON.stringify(props.venueId));
    // SearchGames(props.id, props.venueId)
    return (
      <div>
        {/* <table>
          <tr>
            <td> */}
              <ul>
                <li key={props.id}>
                  <p>{props.name}</p>
                  <p><img src={props.logo} alt=''/></p>
                  <p>{props.venue}</p>
                  <p>{props.city}</p>
                </li>
              </ul>
              {/* <p><onClick ={SearchGames}>Show Matches</OnClick> */}
              
              {/* </p> */}
            {/* </td>
            <td>
              
            </td>
          </tr>
        </table> */}
        {/* <p>{SearchGames(props.id, props.venueId)}</p> */}
      </div>
    )
  };


  const displayTeam = () => {
    team.map((p) => (
      tripDetails.teamId = p.id,
      tripDetails.teamVenue = p.venueId,
      tripDetails.destination = p.city
    ));

    // SearchGames();
    
    return team.map((p) => (
      <Team 
        id = {p.id}
        name = {p.name}  
        logo = {p.logo}
        venue = {p.venue}
        venueId = {p.venueId}
        city = {p.city}
                />
    ));
  };

  
  const displayGames = () => {
    console.log('displayGames' + tripDetails.departureDate);
    return games.map((p) => (
      (new Date(p.date) > new Date()) ?
      // (p.timestamp < utc) ? 
        // console.log(p.id) :
        // console.log(p.timestamp)     
      <ListGames 
      id = {p.id}
      date = {p.date}
      awayTeam = {p.awayTeam}
      awayLogo = {p.awayLogo}
      /> : console.log(p.id) 
    ));
  };

  // const destinationLocation = () => {
  //   return destination.map((p) => (
  //   (destination.city === team.city) ?
  //   <DisplayDestination 
  //   city = {destination.city}
  //   /> :
  //   console.log('none')
  //   ));
  // };
  
  const selectGame = (gameSelection) => dispatch =>{
    console.log(selectGame);
  }

  const ListGames = (props) => {
    return (
      <div>
        {/* <Link to={`/${props.id}`} onClick={() => dispatch(selectGame(props))}> */}
        <Link to={`/${props.id}`} 
        // onClick={() => dispatch(selectGame(props))}
        > 
        <td key={props.id}>
          <tr>Date: {props.date}</tr>
          <tr>vs. {props.awayTeam}</tr>
          <tr><img className='away-team-logo' src={props.awayLogo} alt=''/></tr>
        </td>
        </Link>
      </div>
    )
  };

  // async function foo() {
  //   let obj;
  
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  
  //   obj = await res.json();
  
  //   console.log(obj)
  // }
  
  // foo();

  const searchTeam = (event) => {

    event.preventDefault();

    tripDetails.team = event.target['query'].value;
    tripDetails.departureCity = event.target['departure-city'].value;
    tripDetails.departureDate = event.target['departure-date'].value;
    tripDetails.returnDate = event.target['return-date'].value;

    console.log('tripDetails.departureDate' + tripDetails.departureDate);
    console.log('tripDetails.returnDate' + tripDetails.returnDate)

    if(!event) {
      console.log('waiting for search');
    } else {
      dispatch(fetchTeam(tripDetails.team))
      fetchDeparture(tripDetails.departureCity)

      // fetchTeam(search)
      // .then(response => console.log(response))
      // .then(team => {
      //   // this.team = team;
      //   const teamId = team.map(team => team.id);
      //   return fetchGames(
      //     {
      //       method: 'GET', body: JSON.stringify({ teamId })
      //   }
      //   );
      // })
      // .then(response => response.json())
      // .then(games => {
      //   this.games = games;
      // });      
    }
  }

  const SearchGames = () => {
    // useEffect(() => {
      // if(!tripDetails.teamId) {
      //   console.log('none');
      // } else {
        useEffect(() => {
      console.log('useEffect' + tripDetails.teamId + tripDetails.teamVenue);
      dispatch(fetchGames(tripDetails.teamId, tripDetails.teamVenue))
    //   }
    }, []);
    // dispatch(fetchGames(tripDetails.teamId, tripDetails.teamVenue));
      // }, []);
    // }
  }

  return (
    <Container>
    <div className='main'>
      <table className='main-table'>
        <tr>
          <td colSpan={2}>
            <div className='search'>
              <p>Search your Favorite Team</p>
              
              <form onSubmit={searchTeam}>
                <label for="query">Favorite Team: </label>
                <input className='query' name='query'></input>
                &nbsp;
                <label for="departure-city">Departure City: </label>
                <input className='departure-city' name='departure-city'></input>
                &nbsp;
                <label for="departure-date">Departure Date: </label>
                <input className='departure-date' name='departure-date' type='date'></input>
                &nbsp;
                <label for="return-date">Return Date: </label>
                <input className='return-date' name='return-date' type='date'></input>
                &nbsp;
                <button className='btn btn-secondary' type='submit'>Search</button>
              </form>
              
            </div>
          </td>
          
        </tr>
        <tr>
          <div className='display'>
          <td>
            {/* {SearchGames(tripDetails)} */}
            {displayTeam(team)}
            {/* {TeamDetails} */}
            </td>      
          </div>
        </tr>
        <tr>
          <td>
          <div className='games'>
            <table>
            {displayGames(games)}
            </table>
          </div>
          </td>
        </tr>
      </table>
    </div>
    </Container>
  )

}

export default App;