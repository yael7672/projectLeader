import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { getUser1 } from './MiddleWares/crud'
// import cityReducer from './Reducers/City';
 import UserReducer from './Reducers/UserReducer';
import firstLevel from '../components/firstLevel'
import secondLevel from '../components/secondLevel'
import thirdLevel from '../components/thirdLevel'
 import { toUpperCaseFirstLetter } from './middleWares/crud'
const reducer = combineReducers({  UserReducer });
const store = createStore(reducer,applyMiddleware(toUpperCaseFirstLetter));
window.store = store;
export default store;