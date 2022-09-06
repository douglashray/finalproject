import { FETCH_GAMES } from "../actions";

const gamesReducer = function(state = [], action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_GAMES:
        // console.log('action.payload' + JSON.stringify(action.payload));
        // console.log('action.payload.response' + JSON.stringify(action.payload.response));
        const gamesSearch = action.payload.response;

        console.log(gamesSearch);
        

        const games = gamesSearch.map((p) => {
          return {
            id: p.fixture.id,
            date: p.fixture.date,
            awayTeam: p.teams.away.name,
            awayLogo: p.teams.away.logo
          }
        })

        return [...state, games];

      default: return state;
    }
  }
};

export default gamesReducer;