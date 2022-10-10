import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Image, Container, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeam, fetchGames, fetchAirportDestination, fetchHotelDestination, fetchDeparture, fetchFlights, fetchHotels  } from '../actions';
import { useParams, useLocation, Link } from "react-router-dom";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import '../index.css';
// import TeamDetails from './components/teamdetails';

const TravelSearch = (props) => {
  // console.log('travelsearch fired');
  const { id } = useParams();
  const today = new Date();
  const [cart, setCart] = useState([]);
  const cartTotal = cart.reduce((total, {price = 0}) => total + price, 0);

  const tripDetails = {
    team: '',
    teamId: '',
    teamVenue: '',
    departureCity: '',
    departureDate: '2022-10-14',
    returnDate: '2022-10-21',
    destination: '',
  }
  
  const team = useSelector((state) => state.team);
  const games = useSelector((state) => state.games);
  const destination = useSelector((state) => state.destinationAirport);
  const departure = useSelector((state) => state.departure);
  const hotelLocation = useSelector((state) => state.destinationHotel);
  const flights = useSelector((state) => state.flights);
  const hotels = useSelector((state) => state.hotels);
  // const game = useSelector(state => state.games.entries);

  const isInitialMount = useRef(true);
  const isInitialMountOne = useRef(true);

  // const game = games.get(parseInt(props.match.params.id, 10));

  const dispatch = useDispatch();
  // const location = useLocation();

  // const { from } = location.state;

  // console.log('from'+ JSON.stringify(from));
 
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
    
    tripDetails.departureCity = event.target['departure-city'].value;
    tripDetails.departureDate = event.target['departure-date'].value;
    tripDetails.returnDate = event.target['return-date'].value;

    console.log('searchAccomodations.tripDetails' + JSON.stringify(tripDetails));

    // console.log('destination[0].longitude, destination[0].latitude' + destination[0].longitude, destination[0].latitude)
    
    // const departurecity = event.getElementById['departure'].value;

    if(!event) {
      console.log('waiting for search');
    } else {   
      
      dispatch(fetchDeparture(tripDetails.departureCity))
      // dispatch(fetchFlights())
    }
  }

  useEffect(() => {
    // const hotelDestination = async () => {
    //   if (isInitialMountOne.current) {
    //     isInitialMountOne.current = false;
    //   } else {
      dispatch(fetchHotelDestination(destination[0].longitude, destination[0].latitude));
    //   }
    // }
  
    //   hotelDestination()
    //     .catch(console.error);
    }, []);
  
  useEffect(() => {
    console.log('useEffect.tripDetails' + JSON.stringify(tripDetails));
    const accommodationSearch = async () => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log('hotelLocation.id' + hotelLocation);
      console.log('hotelSearchtripDetails.departureDate' + tripDetails.departureDate);
    console.log('hotelSearchtripDetails.returnDate' + tripDetails.returnDate);

      // console.log('hotelSearch' + JSON.stringify(departure));
      await dispatch(fetchHotels(hotelLocation[0].id, tripDetails.departureDate, tripDetails.returnDate));

      await dispatch(fetchFlights(departure[0].cityCode, destination[0].cityCode, tripDetails.departureDate, tripDetails.returnDate))
    }
    }

    accommodationSearch()
      .catch(console.error);
  }, [departure]);

  const add = (p) => {
    console.log('selection' + JSON.stringify(p));
    setCart([...cart, p]);
  };

  const cartItems = cart.map((p) => (
    (!p.airline) ?
    <div key={p.id}>
      {`${p.name}: starting at $${p.price}/night`}
      <input type='submit' value='remove' onClick={() => remove(p)} />
    </div>
    : 
    <div key={p.id}>
      {`Airline: ${p.airline} Round Trip: $${p.price}`}
      <input type='submit' value='remove' onClick={() => remove(p)} />
    </div>
  ));

  const remove = (p) => {
    let theCart = [...cart];
    theCart = theCart.filter((cartItem) => cartItem.id !== p.id);
    setCart(theCart);
  };

  const flightComponents = flights.map((p) => {
    // if(p.airline === 'UA') {
    //   const airlineName = 'United';
    // }

    if(p.airline == 'AA' || 'UA') {

    return (
      
        <tr>
          <td>
            <ul>
              <li key={p.id}>
                {/* <p>Flight: {p.flightNumber}</p>
                <p>Departure: {p.departure}</p>
                <p>Return: {p.arrival}</p> */}
                <p>Airline: {p.airline}</p>
                <p>Price: {p.price}</p>
                <p><Link value='add' onClick={() => add(p)}>Select</Link></p>
              </li>
            </ul>
          </td> 
        </tr>
       
    ) 
    
  } 

  })

  const hotelComponents = hotels.map((p) => {
    if(!p.name) {
      console.log(p); 
    } else {
      return (
        <tr>
            <td>
              <ul>
                <li key={p.id}>
                  <p>Hotel: {p.name}</p>
                  <p>Price: {p.price}</p>
                  <p>Rating: {p.starRating}</p>
                  <p><img src={p.img} /> </p>
                  <p><Link value='add' onClick={() => add(p)}>Select</Link></p>
                </li>
              </ul>
              </td> 
          </tr>   
      )
    }
  })

  return (
    <Container>
    <Main>
    <div className='main'>
      <p>Match Day: {result.date} || {cartTotal}</p>
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
    </Main>
    <Results>
    <div className="flights-hotels">
      <table>
        <tbody>
          <tr><td>Travel Options from {tripDetails.departureDate} to {tripDetails.returnDate}</td></tr>
          <tr><td>{cartItems}</td></tr>
          <tr>
            <td>
              <p>Flight Results</p>
              <p>{flightComponents}</p>
            </td>
            <td>
              <p>Hotel Results</p>
              <p>{hotelComponents}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </Results>
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

const Results = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
  padding-top: 100px;
  vertical-align: top;

`;