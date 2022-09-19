import { FETCH_FLIGHTS } from "../actions";

const initialState = [];

const flightsReducer = function(state = initialState, action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_FLIGHTS:
        console.log('action.payload' + JSON.stringify(action.payload));
        console.log('action.payload.response' + JSON.stringify(action.payload.response));
        const flightSearch = action.payload;

        console.log('flightSearch' + JSON.stringify(flightSearch));

        const flights = flightSearch.map((p) => {
          return {
            flightNumber: p.flightNumber,
            arrival: p.arrivalDateTime,
            departure: p.departDateTime,
          }
        })

        return [...flights];

      default: return state;
    }
  }
};

export default flightsReducer;