import { combineReducers } from 'redux';
import WatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: WatherReducer
});

export default rootReducer;
