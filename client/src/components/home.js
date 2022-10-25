import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Link, useHistory, Routes } from 'react-router-dom';
import { Table, Button, Image, Container, Row, Col, Form } from 'react-bootstrap';
import styled from "styled-components";
import React, { useEffect, useRef } from 'react';
import { fetchTeam, fetchGames, fetchAirportDestination, fetchHotelDestination, fetchDeparture, fetchFlights  } from '../actions';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Home = (props) => {
  const team = useSelector((state) => state.team);
  const games = useSelector((state) => state.games);
  const destination = useSelector((state) => state.destinationAirport);
  // const departure = useSelector((state) => state.departure);
  // const hotelLocation = useSelector((state) => state.destinationHotel);
  // const flights = useSelector((state) => state.flights);
  // const hotels = useSelector((state) => state.hotels);
  // const utc = new Date();
  const teamDetails = {
    team: '',
    teamId: '',
    teamVenue: '',
    destination: '',
  }
  // let destinationTest = team[0].city;
  // console.log('tripDetails'+ JSON.stringify(tripDetails));

  const dispatch = useDispatch();

  const Team = (props) => {
    // console.log('props' + JSON.stringify(props.id) + JSON.stringify(props.venueId));
    // SearchGames(props.id, props.venueId)
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td>
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
            <td> */}
              
            </td>
          </tr>
          </tbody>
        </table>
        {/* <p>{SearchGames(props.id, props.venueId)}</p> */}
      </div>
    )
  };

  const addGame = (p) => {
    // setCart([...cart, p]);
    console.log('addGame' + JSON.stringify(p));
  };


  const displayTeam = () => {
    team.map((p) => (
      teamDetails.teamId = p.id,
      teamDetails.teamVenue = p.venueId,
      teamDetails.destination = p.city
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
    // console.log('displayGames' + JSON.stringify(games));
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
      /> : null 
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
  

  const ListGames = (props) => {
    return (
      <table>
        <tbody>
        <tr>
          <td>
            <ul>
              <li key={props.id}>
                <Link to={`/${props.id}`} 
                // state={{ from: "games" }}
                onClick= {() => addGame(props)}
                // onClick={() => dispatch(selectGame(props))}
                >
                <p>vs. {props.awayTeam}</p>
                <p> Date: {props.date}</p></Link>
                <p /><img className='away-team-logo' src={props.awayLogo} alt=''/>
              </li>
            </ul>
          </td> 
        </tr>
        </tbody>
      </table> 
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

    teamDetails.team = event.target['query'].value;
    // tripDetails.departureCity = event.target['departure-city'].value;
    // tripDetails.departureDate = event.target['departure-date'].value;
    // tripDetails.returnDate = event.target['return-date'].value;

    // console.log('tripDetails.departureDate' + JSON.stringify(new Date(tripDetails.departureDate)));
    // console.log('tripDetails.returnDate' + tripDetails.returnDate)

    if(!event) {
      console.log('waiting for search');
    } else {
      dispatch(fetchTeam(teamDetails.team))
      
      // dispatch(fetchDeparture(tripDetails.departureCity));

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

  const isInitialMount = useRef(true);

  useEffect(() => {
    const gamesSearch = async () => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
      
      // console.log('gamesSearch' + JSON.stringify(tripDetails.destination));
      
      await dispatch(fetchGames(teamDetails.teamId, teamDetails.teamVenue));
      await dispatch(fetchAirportDestination(teamDetails.destination));

      }
    }

    gamesSearch()
    .catch(console.error);
  }, [team]);

  return (
    <Container>
      <Main>
        <div className='main'>
          <table className='main-table'>
            <tbody>
            <tr>
              <td>
                
                  <p>Search your Favorite Team</p>
                  
                  <form onSubmit={searchTeam}>
                    <label htmlFor="query">Favorite Team:&nbsp;</label>
                    <input className='query' name='query' />
                    &nbsp;
                    <button className='btn btn-secondary' type='submit'>Search</button>
                  </form>
                
              </td>
            </tr>
            <tr>
              
              <td>
                {/* {SearchGames(tripDetails)} */}
                {displayTeam(team)}
                {/* {TeamDetails} */}
                </td>      
              
            </tr>
            <tr>
              <td>

                {displayGames(games)}
              
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </Main>
    </Container>
  )

}

export default Home;

const Main = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
  padding-top: 100px;

`;