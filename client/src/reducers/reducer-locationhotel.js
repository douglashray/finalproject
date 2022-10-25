import { FETCH_HOTEL_DESTINATION } from "../actions";

const initialState = [];

const destinationHotelReducer = function(state = initialState, action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_HOTEL_DESTINATION:
                
        const citySearch = action.payload;

        // console.log('destinationHotelReducer'+ JSON.stringify(citySearch));

        const location = { 
        // .map((p) => {
          // return {
            id: citySearch.matchedCity.cityID,
          }
        // })
        // }
        // console.log(location);
        // console.log('location'+ JSON.stringify(location));

        return [location];

      default: return state;
    }
  }
};

export default destinationHotelReducer;