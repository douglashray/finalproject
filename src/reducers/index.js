import { combineReducers } from "redux";
import teamReducer from "./reducer-teams";
import gamesReducer from "./reducer-games";
import destinationAirportReducer from "./reducer-locationairport";
import destinationHotelReducer from "./reducer-locationhotel";
import flightsReducer from "./reducer-flights";
import hotelsReducer from "./reducer-hotels";

const rootReducer = combineReducers({
  team: teamReducer,
  games: gamesReducer,
  locationAirport: destinationAirportReducer, 
  locationHotel: destinationHotelReducer,
  flights: flightsReducer,
  hotels: hotelsReducer
});

export default rootReducer;