import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Image, Container, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeam, fetchGames, fetchAirportDestination, fetchHotelDestination, fetchDeparture, fetchFlights, fetchHotels  } from '../actions';
import { useParams, useLocation } from "react-router-dom";
import '../index.css';
// import TeamDetails from './components/teamdetails';

const TravelSearch = (props) => {
  // console.log('travelsearch fired');
  const { id } = useParams();

  const tripDetails = {
    team: '',
    teamId: '',
    teamVenue: '',
    departureCity: '',
    departureDate: '2022-10-05',
    returnDate: '2022-10-20',
    destination: '',
  }
  
  const team = useSelector((state) => state.team);
  const games = useSelector((state) => state.games);
  const destination = useSelector((state) => state.destinationAirport);
  const departure = useSelector((state) => state.departure);
  const hotelLocation = useSelector((state) => state.destinationHotel);
  const flights = useSelector((state) => state.flights);
  const hotels = useSelector((state) => state.hotels);
  const game = useSelector(state => state.games.entries);

  const isInitialMount = useRef(true);

  // const game = games.get(parseInt(props.match.params.id, 10));

  const dispatch = useDispatch();
  // const location = useLocation();

  // const { from } = location.state;

  // console.log('from'+ JSON.stringify(from));
  // console.log('team'+ JSON.stringify(team));
  console.log('destination'+ JSON.stringify(destination[0]));
  console.log('departure'+ JSON.stringify(departure));
  console.log('flights'+ JSON.stringify(flights));
  console.log('hotelLocation'+ JSON.stringify(hotelLocation));
  console.log('hotels'+ JSON.stringify(hotels));
 
  // function find(games) {
  //   return games.id === id;
  // }

  // console.log(games.find(find));
  const result = games.find(theId => theId.id === parseInt(id));
  // console.log('result' + JSON.stringify(result));



  

  const searchAccommodations = (event) => {
    // console.log('searchAccomodations.event' + event);
    event.preventDefault();

    // let addDetails = { ...tripDetails}
    
    tripDetails.departureCity = event.target['departure-city'].value || '';
    tripDetails.departureDate = event.target['departure-date'].value || '';
    tripDetails.returnDate = event.target['return-date'].value || '';

    console.log('searchAccomodations.tripDetails' + JSON.stringify(tripDetails));

    // console.log('destination[0].longitude, destination[0].latitude' + destination[0].longitude, destination[0].latitude)
    
    // const departurecity = event.getElementById['departure'].value;
    const departurecity = 'denver';

    if(!event) {
      console.log('waiting for search');
    } else {   
      dispatch(fetchDeparture(tripDetails.departureCity))
      dispatch(fetchHotelDestination(destination[0].longitude, destination[0].latitude));
      // dispatch(fetchFlights())
    }
  }
  
  useEffect(() => {
    console.log('useEffect.tripDetails' + JSON.stringify(tripDetails));
    const accommodationSearch = async () => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log('hotelLocation.id' + hotelLocation);
      console.log('hotelSearchtripDetails.departureDate' + tripDetails.departureDate);
    console.log('hotelSearchtripDetails.returnDate' + tripDetails.returnDate);

      console.log('hotelSearch' + JSON.stringify(departure));
      await dispatch(fetchHotels(hotelLocation[0].id, tripDetails.departureDate, tripDetails.returnDate));
      await dispatch(fetchFlights(departure[0].cityCode, destination[0].cityCode, tripDetails.departureDate, tripDetails.returnDate))
    }
    }

    accommodationSearch()
      .catch(console.error);
  }, [departure]);

  const flightComponents = flights.map((p) => {
    // const flight = flights[id];

    // return <Flight 
    //   id={p.flightNumber} 
    //   flightNum = {p.flightNumber} 
    //   /> 
    return (
      <table>
        <tbody>
        <tr>
          <td>
            <ul>
              <li key={p.flightNumber}>
                <p>Flight: {p.flightNumber}</p>
                <p>Departure: {p.departure}</p>
                <p>Return: {p.arrival}</p>
              </li>
            </ul>
          </td> 
        </tr>
        </tbody>
      </table> 
    )


  })

  return (
    <Container>
    <Main>
    <div className='main'>
      <p>Match Day: {result.date}</p>
      <table className='main-table'>
        <tr>
          <td>
            <div className="home-team">
              {team[0].name}
            </div>
          </td>
          <td>vs.</td>
          <td>
            <div className='away-team'>
              <p>{result.awayTeam}</p>
            </div>
          </td>
          <td><form onSubmit={searchAccommodations}>
                    <label htmlFor="departure-city">Departure City:&nbsp;</label>
                    <input className='departure-city' name='departure-city'/>
                    &nbsp;
                    <label htmlFor="departure-date">Departure Date:&nbsp;</label>
                    <input className='departure-date' name='departure-date' type='date'/>
                    &nbsp;
                    <label htmlFor="return-date">Return Date:&nbsp;</label>
                    <input className='return-date' name='return-date' type='date'/>
                    &nbsp;
                    <button className='btn btn-secondary' type='submit'>Search</button>
                  </form>
                  </td>
        </tr>
      </table>
    </div>
    <div className="flights">
      {flightComponents}
    </div>
    </Main>
    </Container>
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

const Flight = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
  padding-top: 100px;

`;