import { FETCH_AIRPORT_DESTINATION } from "../actions";

const initialState = [];

const destinationAirportReducer = function(state = initialState, action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_AIRPORT_DESTINATION:

        const citySearch = action.payload;


        const destination = citySearch.map((p) => {
          return {
            id: p.id,
            cityCode: p.cityCode,
            city: p.cityName,
            latitude: p.lat,
            longitude: p.lon
          }
        })

        // console.log('destination'+ JSON.stringify(destination[0]));

        return [...destination];

      default: return state;
    }
  }
};

export default destinationAirportReducer;