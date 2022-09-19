import { FETCH_HOTEL_DESTINATION } from "../actions";

const initialState = [];

const destinationHotelReducer = function(state = initialState, action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_HOTEL_DESTINATION:
        // console.log('action.payload' + JSON.stringify(action.payload));
        // console.log('action.payload.response' + JSON.stringify(action.payload.response));
        const citySearch = action.payload;

        const location = citySearch.slice(0,1).map((p) => {
          return {
            id: p.matchedCity.cityID,
          }
        })

        return [...location];

      default: return state;
    }
  }
};

export default destinationHotelReducer;