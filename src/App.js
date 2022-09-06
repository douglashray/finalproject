import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
// import styled from "styled-components";
import React from 'react';
import { fetchTeam, fetchGames, fetchLocation } from './actions';
import './index.css';

function App () {
  const team = useSelector((state) => state.team);
  const games = useSelector((state) => state.games);
  const location = useSelector((state) => state.location);
  console.log(location);
  console.log(team);

  const venueDetails = {
    name: team.id,
    venue: team.venueId
  };

  const dispatch = useDispatch();


  const Team = (props) => {
    console.log('props' + JSON.stringify(props));
    return (
      <div>
        <ul>
          <li id={props.id}>
            <br>{props.name}</br>
            <br></br><img src={props.logo} alt=''/>
          </li>
        </ul>
      </div>
    )
  }

  const displayTeam = () => {
    console.log('displayTeam' + team)
    return team.map((p) => (
      <Team 
        id={p.id}
        name = {p.name}  
        logo = {p.logo}
                />
      
    //   <div><ul>
    //   <li>
    //     <br>{p.name}</br>
    //     <br></br><img src={p.logo} alt=''/>
    //   </li>
    // </ul></div>
    ));

  };

  const searchTeam = (event) => {
    event.preventDefault();

    const search = event.target['query'].value;

    if(!event) {
      console.log('waiting for search');
    } else {
      dispatch(fetchTeam(search))
      dispatch(fetchGames(venueDetails))
      dispatch(fetchLocation(search))
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

        {displayTeam}
      </div>
    </div>
    
  )

}

export default App;