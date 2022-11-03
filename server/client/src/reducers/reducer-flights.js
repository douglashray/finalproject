import { FETCH_FLIGHTS } from "../actions";

const initialState = [];

const flightsReducer = function(state = initialState, action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_FLIGHTS:
        // console.log('action.payload' + JSON.stringify(action.payload));
        
        const flightSearch = action.payload;

        // console.log('flightSearch' + JSON.stringify(flightSearch.pricedItinerary));

        const flights = flightSearch.pricedItinerary.map((p) => {
          return {
            id: Math.floor(Math.random() * 1000),
            airline: p.pricingInfo.ticketingAirline,
            price: Number(p.pricingInfo.totalFare),
          }
        })

        return [...flights];

      default: return state;
    }
  }
};

export default flightsReducer;