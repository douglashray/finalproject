import { FETCH_HOTELS } from "../actions";

const initialState = [];

const hotelsReducer = function(state = initialState, action) {
  
  if(action.error === true) {
    alert('error, please try again');
    return state;
  } else {
    switch (action.type) {
      case FETCH_HOTELS:
        // console.log('action.payload' + JSON.stringify(action.payload));
        // console.log('action.payload.response' + JSON.stringify(action.payload.response));
        const hotelSearch = action.payload.response;

        const hotels = hotelSearch.hotels.map((p) => {
          return {
            id: p.hotelId || p.pclnId,
            name: p.name,
            brand: p.brand,
            img: p.thumbnailUrl,
            starRating: p.hotels.starRating,
            minPrice: p.ratesSummary.minPrice,
          }
        })

        return [...hotels];

      default: return state;
    }
  }
};

export default hotelsReducer;