import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
// import styled from "styled-components";
import React, { useEffect } from 'react';


const TeamDetails = () => {
const team = useSelector((state) => state.team);
const games = useSelector((state) => state.games);

const Team = (props) => {
  console.log('props' + JSON.stringify(props.id) + JSON.stringify(props.venueId));
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
              </li>
            </ul>
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
  return team.map((p) => (
    <Team 
      id = {p.id}
      name = {p.name}  
      logo = {p.logo}
      venue = {p.venue}
      venueId = {p.venueId}
              />
  ));
};


}

export default TeamDetails;