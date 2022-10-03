import { FETCH_DEPARTURE } from "../actions";

const initialState = [];

const departureAirportReducer = function(state = initialState, action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_DEPARTURE:
        // console.log('action.payload' + JSON.stringify(action.payload));
        // console.log('action.payload.response' + JSON.stringify(action.payload.response));
        const citySearch = action.payload;

        console.log('departureAirportReducer' + JSON.stringify(citySearch))

        const departure = citySearch.map((p) => {
          return {
            id: p.id,
            cityCode: p.cityCode,
            city: p.cityName,
            latitude: p.lat,
            longitude: p.lon
          }
        })

        // console.log('departure'+ JSON.stringify(departure));

        return [...departure];

      default: return state;
    }
  }
};

export default departureAirportReducer;