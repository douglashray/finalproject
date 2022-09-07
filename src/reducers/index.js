import { combineReducers } from "redux";
import teamReducer from "./reducer-teams";
import gamesReducer from "./reducer-games";
import destinationAirportReducer from "./reducer-locationairport";
import destinationHotelReducer from "./reducer-locationhotel";

const rootReducer = combineReducers({
  team: teamReducer,
  games: gamesReducer,
  locationAirport: destinationAirportReducer, 
  locationHotel: destinationHotelReducer,
  flights: '',
  hotels: ''
});

export default rootReducer;