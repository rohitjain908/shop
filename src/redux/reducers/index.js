import {productReducer,productsReducer} from './productReducer';
import {combineReducers} from 'redux';

const reducers=combineReducers({
  products:productsReducer,
  product:productReducer
})

export default reducers
