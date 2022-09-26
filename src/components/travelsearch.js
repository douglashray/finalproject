import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeam, fetchGames, fetchAirportDestination, fetchHotelDestination, fetchDeparture, fetchFlights  } from '../actions';
import '../index.css';
// import TeamDetails from './components/teamdetails';

const TravelSearch = (props) => {
  console.log('travelsearch fired');

  const team = useSelector((state) => state.team);
  const games = useSelector((state) => state.games);
  const destination = useSelector((state) => state.destination);
  const departure = useSelector((state) => state.departure);
  const hotelLocation = useSelector((state) => state.location);
  const flights = useSelector((state) => state.flights);
  const hotels = useSelector((state) => state.hotels)

  const dispatch = useDispatch();

  console.log(props);

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
    <div className='main'>
      <table className='main-table'>
        <tr>
          <td>
            <div className='departure'>
              <p>Search Flights</p>
              <form>
                <input id='departure'>Departure</input>
                <input id="destination">Destination {team.city}</input>
                <button type='button' className='btn btn-warning btn-sm' onSubmit={searchFlights}>Find</button>
              </form>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default TravelSearch;