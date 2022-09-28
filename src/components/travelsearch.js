import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeam, fetchGames, fetchAirportDestination, fetchHotelDestination, fetchDeparture, fetchFlights  } from '../actions';
import { useParams, useLocation } from "react-router-dom";
import '../index.css';
// import TeamDetails from './components/teamdetails';

const TravelSearch = (props) => {
  console.log('travelsearch fired');
  const { id } = useParams();
  

  const team = useSelector((state) => state.team);
  const games = useSelector((state) => state.games);
  const destination = useSelector((state) => state.destination);
  const departure = useSelector((state) => state.departure);
  const hotelLocation = useSelector((state) => state.location);
  const flights = useSelector((state) => state.flights);
  const hotels = useSelector((state) => state.hotels);
  const game = useSelector(state => state.games.entries);

  // const game = games.get(parseInt(props.match.params.id, 10));

  const dispatch = useDispatch();
  const location = useLocation();

  const { from } = location.state;

  console.log('from'+ JSON.stringify(from));
  console.log('games'+ JSON.stringify(games));
  console.log('game'+ JSON.stringify(game));
  console.log('games.id'+ JSON.stringify(games.id));
  console.log('id'+ JSON.stringify(id));
  // console.log('find' + games.find(id));

  function find(games) {
    return games.id === id;
  }

  console.log(games.find(find));
  const result = games.find(theId => theId.id === parseInt(id));
  console.log('result' + JSON.stringify(result));
  // const gamePicked = games.get(id);
  // console.log('gamePicked'+ gamePicked);
  const searchFlights = (event) => {
    console.log(event);
    event.preventDefault();

    // const departurecity = event.getElementById['departure'].value;
    const departurecity = 'denver';

    if(!event) {
      console.log('waiting for search');
    } else {
      dispatch(fetchAirportDestination('London'))
      
      dispatch(fetchDeparture(departurecity))
      dispatch(fetchFlights())
    }
  }


  return (
    <Main>
    <div className='main'>
      <table className='main-table'>
        <tr>
          <td>
            <div className='departure'>
              <p>Search Flights</p>
              <p>{result.awayTeam}</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
    </Main>
  )
}

export default TravelSearch;

const Main = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
  padding-top: 100px;

`;