import { combineReducers } from 'redux';
import mainModelSelect from './mainModelSelectReducer';

const rootReducer = combineReducers({
    mainModelReducer: mainModelSelect
  });
  
export default rootReducer;