import { FETCH_GAMES } from "../actions";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const initialState = [];

const gamesReducer = function(state = initialState, action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_GAMES:
        // console.log('action.payload' + JSON.stringify(action.payload));
        // console.log('action.payload.response' + JSON.stringify(action.payload.response));
        const gamesSearch = action.payload.response;

        const games = gamesSearch.map((p) => {
          return {
            id: p.fixture.id,
            date: p.fixture.date,
            timestamp: p.fixture.timestamp,
            awayTeam: p.teams.away.name,
            awayLogo: p.teams.away.logo
          }
        })

        return [...games];

      default: return state;
    }
  }
};

export default gamesReducer;