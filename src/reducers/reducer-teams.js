import { FETCH_TEAM } from "../actions";

const teamReducer = function(state = [], action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_TEAM:
        // console.log('action.payload' + JSON.stringify(action.payload));
        // console.log('action.payload.response' + JSON.stringify(action.payload.response));
        const teamSearch = action.payload.response;

        const team = teamSearch.slice(0,1).map((p) => {
          return {
            id: p.team.id,
            name: p.team.name,
            logo: p.team.logo,
            city: p.venue.city,
            country: p.team.country,
            venueId: p.venue.id,
            venue: p.venue.name,
            venueImage: p.venue.image
          }
        })

        // console.log('teamreducer' + JSON.stringify(team));

        return [...team];

      default: return state;
    }
  }
};

export default teamReducer;