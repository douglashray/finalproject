import { combineReducers } from "redux";
import teamReducer from "./reducer-teams";
import gamesReducer from "./reducer-games";
import locationReducer from "./reducer-citylocation";

const rootReducer = combineReducers({
  team: teamReducer,
  games: gamesReducer,
  location: locationReducer
});

export default rootReducer;