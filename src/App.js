import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
// import styled from "styled-components";
import React from 'react';
import { fetchTeam, fetchGames, fetchAirportDestination, fetchHotelDestination  } from './actions';
import './index.css';

function App () {
  const team = useSelector((state) => state.team);
  const games = useSelector((state) => state.games);
  const location = useSelector((state) => state.location);
  // console.log('location' + location);

  console.log('games'+ JSON.stringify(games));
  // console.log('games' + JSON.stringify(games));
  // console.log('venueDetails'+ JSON.stringify(venueDetails));

  const dispatch = useDispatch();
  var utc = new Date().getTime();
  console.log(utc);

  const Team = (props) => {
    console.log('props' + JSON.stringify(props));
    return (
      <div>
        <ul>
          <li key={props.id}>
            <p>{props.name}</p>
            <p><img src={props.logo} alt=''/></p>
            <p>{props.venue}</p>
          </li>
        </ul>
      </div>
    )
  };

  const displayTeam = () => {
    return team.map((p) => (
      <Team 
        id = {p.id}
        name = {p.name}  
        logo = {p.logo}
        venue = {p.venue}
                />
    ));
  };
  
  const displayGames = () => {
    console.log('props' + JSON.stringify(games.timestamp));
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
  
  const ListGames = (props) => {
    console.log('props' + JSON.stringify(props));
    return (
      <div>
        <td key={props.id}>
          <tr>Date: {props.date}</tr>
          <tr>vs. {props.awayTeam}</tr>
          <tr><img className='away-team-logo' src={props.awayLogo} alt=''/></tr>
        </td>
      </div>
    )
  };


  const searchTeam = (event) => {
    event.preventDefault();

    const search = event.target['query'].value;

    if(!event) {
      console.log('waiting for search');
    } else {
      dispatch(fetchTeam(search))
      dispatch(fetchGames('42','494'))
      // dispatch(fetchAirportDestination(search))
    }
  }

  return (
    <div className='main'>
      <div className='search'>
        <form onSubmit={searchTeam}
        >
          <input className='query' name='query'></input>
          <button className='btn btn-secondary' type='submit'>Search</button>
        </form>
      </div>
      <div className='display'>

        {displayTeam(team)}
      </div>
      <div className='games'>
        <table>
        {displayGames(games)}
        </table>
      </div>
    </div>
    
  )

}

export default App;