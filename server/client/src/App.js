import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Link, useHistory, Routes } from 'react-router-dom';
import { Table, Button, Image, Container, Row, Col, Form } from 'react-bootstrap';
import styled from "styled-components";
import React, { useEffect } from 'react';
import { fetchTeam, fetchGames, fetchAirportDestination, fetchHotelDestination, fetchDeparture, fetchFlights  } from './actions';
import Home from './components/home';
import './index.css';
import TravelSearch from './components/travelsearch';
// import TeamDetails from './components/teamdetails';
import Signup from './components/signup';
import Login from './components/login';


function App () {
  return (
    <Routes>
    <Route exact path='/' element={<Home />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} /> 
            <Route exact path='/:id' element={<TravelSearch />} />
    </Routes>
  );
};

// const Home = (props) => {
//   const team = useSelector((state) => state.team);
//   const games = useSelector((state) => state.games);
//   const destination = useSelector((state) => state.destinationAirport);
//   const departure = useSelector((state) => state.departure);
//   const hotelLocation = useSelector((state) => state.destinationHotel);
//   const flights = useSelector((state) => state.flights);
//   const hotels = useSelector((state) => state.hotels);
//   const utc = new Date();
//   const tripDetails = {
//     team: '',
//     teamId: '',
//     teamVenue: '',
//     departureCity: '',
//     departureDate: '',
//     returnDate: '',
//     destination: '',
//   }
//   // let destinationTest = team[0].city;
//   // console.log('tripDetails'+ JSON.stringify(tripDetails));

//   const dispatch = useDispatch();
  
//   console.log('hotelLocation'+hotelLocation);
//   console.log('destination'+destination);
//   console.log('departure'+departure);

 

//   // useEffect(() => {
//   //   if(!tripDetails.teamId) {
//   //     console.log('none');
//   //   } else {
      
//   //   console.log('useEffect' + tripDetails.teamId);
//   //   // dispatch(fetchGames(42, 494);
//   //   }
//   // }, []);
  
//   // const searchDeparture = (event) => {
//   //   console.log(event);
//   //   event.preventDefault();

//   //   // const departurecity = event.getElementById['departure'].value;
//   //   const departurecity = 'denver';

//   //   if(!event) {
//   //     console.log('waiting for search');
//   //   } else {
//   //     dispatch(fetchAirportDestination('London'))
      
//   //     dispatch(fetchDeparture(departurecity))
//   //   }
//   // }

//   const Team = (props) => {
//     // console.log('props' + JSON.stringify(props.id) + JSON.stringify(props.venueId));
//     // SearchGames(props.id, props.venueId)
//     return (
//       <div>
//         <table>
//           <tr>
//             <td>
//               <ul>
//                 <li key={props.id}>
//                   <p>{props.name}</p>
//                   <p><img src={props.logo} alt=''/></p>
//                   <p>{props.venue}</p>
//                   <p>{props.city}</p>
//                 </li>
//               </ul>
//               {/* <p><onClick ={SearchGames}>Show Matches</OnClick> */}
              
//               {/* </p> */}
//             {/* </td>
//             <td> */}
              
//             </td>
//           </tr>
//         </table>
//         {/* <p>{SearchGames(props.id, props.venueId)}</p> */}
//       </div>
//     )
//   };


//   const displayTeam = () => {
//     team.map((p) => (
//       tripDetails.teamId = p.id,
//       tripDetails.teamVenue = p.venueId,
//       tripDetails.destination = p.city
//     ));

//     // SearchGames();
    
//     return team.map((p) => (
//       <Team 
//         id = {p.id}
//         name = {p.name}  
//         logo = {p.logo}
//         venue = {p.venue}
//         venueId = {p.venueId}
//         city = {p.city}
//                 />
//     ));
//   };

  
//   const displayGames = () => {
//     console.log('displayGames' + JSON.stringify(new Date(tripDetails.departureDate)));
//     return games.map((p) => (
//       (new Date(p.date) > new Date()) ?
//       // (p.timestamp < utc) ? 
//         // console.log(p.id) :
//         // console.log(p.timestamp)     
//       <ListGames 
//       id = {p.id}
//       date = {p.date}
//       awayTeam = {p.awayTeam}
//       awayLogo = {p.awayLogo}
//       /> : console.log(p.id) 
//     ));
//   };

//   // const destinationLocation = () => {
//   //   return destination.map((p) => (
//   //   (destination.city === team.city) ?
//   //   <DisplayDestination 
//   //   city = {destination.city}
//   //   /> :
//   //   console.log('none')
//   //   ));
//   // };
  
//   const selectGame = (gameSelection) => dispatch => {
//     console.log('selectGame' + gameSelection);
//     // TravelSearch();
//   }

//   const ListGames = (props) => {
//     return (
//       <table>
//         <tr>
//           <td>
//             <ul>
//               <li key={props.id}>
//                 <Link to={`/${props.id}`} onClick=
//                 {selectGame(props.id)}
//                 // onClick={() => dispatch(selectGame(props))}
//                 >
//                 <p>vs. {props.awayTeam}</p>
//                 <p> Date: {props.date}</p></Link>
//                 <p><img className='away-team-logo' src={props.awayLogo} alt=''/></p>
//               </li>
//             </ul>
//           </td> 
//         </tr>
//       </table> 
//     )
//   };

//   // async function foo() {
//   //   let obj;
  
//   //   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  
//   //   obj = await res.json();
  
//   //   console.log(obj)
//   // }
  
//   // foo();

//   const searchTeam = (event) => {

//     event.preventDefault();

//     tripDetails.team = event.target['query'].value;
//     tripDetails.departureCity = event.target['departure-city'].value;
//     tripDetails.departureDate = event.target['departure-date'].value;
//     tripDetails.returnDate = event.target['return-date'].value;

//     console.log('tripDetails.departureDate' + JSON.stringify(new Date(tripDetails.departureDate)));
//     console.log('tripDetails.returnDate' + tripDetails.returnDate)

//     if(!event) {
//       console.log('waiting for search');
//     } else {
//       dispatch(fetchTeam(tripDetails.team))
      

//       // fetchTeam(search)
//       // .then(response => console.log(response))
//       // .then(team => {
//       //   // this.team = team;
//       //   const teamId = team.map(team => team.id);
//       //   return fetchGames(
//       //     {
//       //       method: 'GET', body: JSON.stringify({ teamId })
//       //   }
//       //   );
//       // })
//       // .then(response => response.json())
//       // .then(games => {
//       //   this.games = games;
//       // });      
//     }
//   }


//   useEffect(() => {
//     const gamesSearch = async () => {
//       // console.log('gamesSearch' + JSON.stringify(tripDetails.destination));
//       // await dispatch(fetchDeparture(tripDetails.departureCity));
//       await dispatch(fetchGames(tripDetails.teamId, tripDetails.teamVenue));
//       // await dispatch(fetchAirportDestination(tripDetails.destination));
      
//       // await data.json(data);
//     }

//     gamesSearch()
//     .catch(console.error);
//   }, [team]);

//   useEffect(() => {
//     const hotelSearch = async () => {
//       console.log('hotelSearch' + JSON.stringify(destination));
//       // await dispatch(fetchHotelDestination(destination[0].longitude, destination[0].latitude));
//     }

//     hotelSearch()
//       .catch(console.error);
//   }, [destination]);


//   return (
//     <Container>
//       <Main>
//         <div className='main'>
//           <table className='main-table'>
//             <tr>
//               <td>
                
//                   <p>Search your Favorite Team</p>
                  
//                   <form onSubmit={searchTeam}>
//                     <label htmlFor="query">Favorite Team:&nbsp;</label>
//                     <input className='query' name='query'></input>
//                     &nbsp;
//                     <label htmlFor="departure-city">Departure City:&nbsp;</label>
//                     <input className='departure-city' name='departure-city'></input>
//                     &nbsp;
//                     <label htmlFor="departure-date">Departure Date:&nbsp;</label>
//                     <input className='departure-date' name='departure-date' type='date'></input>
//                     &nbsp;
//                     <label htmlFor="return-date">Return Date:&nbsp;</label>
//                     <input className='return-date' name='return-date' type='date'></input>
//                     &nbsp;
//                     <button className='btn btn-secondary' type='submit'>Search</button>
//                   </form>
                
//               </td>
//             </tr>
//             <tr>
              
//               <td>
//                 {/* {SearchGames(tripDetails)} */}
//                 {displayTeam(team)}
//                 {/* {TeamDetails} */}
//                 </td>      
              
//             </tr>
//             <tr>
//               <td>
              
                
//                 {displayGames(games)}
                
                
              
//               </td>
//             </tr>
//           </table>
//         </div>
//       </Main>
//     </Container>
//   )

// }

export default App;

// const Main = styled.div`
// display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   padding: 2em;
//   margin: 0 auto;
//   padding-top: 100px;

// `;