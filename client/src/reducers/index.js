import { combineReducers } from "redux";
import teamReducer from "./reducer-teams";
import gamesReducer from "./reducer-games";
import destinationAirportReducer from "./reducer-locationairport";
import destinationHotelReducer from "./reducer-locationhotel";
import flightsReducer from "./reducer-flights";
import hotelsReducer from "./reducer-hotels";
import departureAirportReducer from "./reducer-departure";
import authenticationReducer from "./reducer-authentication";

const rootReducer = combineReducers({
  team: teamReducer,
  games: gamesReducer,
  destinationAirport: destinationAirportReducer, 
  destinationHotel: destinationHotelReducer,
  flights: flightsReducer,
  hotels: hotelsReducer,
  departure: departureAirportReducer,
  authentication: authenticationReducer
});

export default rootReducer;