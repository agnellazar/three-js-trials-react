import { combineReducers } from 'redux';
import { routeReducer } from './routeReducer'

const rootReducer = combineReducers({
    counter: routeReducer,
  });
  
  export default rootReducer;