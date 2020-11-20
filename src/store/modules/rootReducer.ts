import { combineReducers } from 'redux';
import { StoreState } from '../createStore';

import vehiclesMakers from './vehiclesMakers/reducer';

export default combineReducers<StoreState>({
  vehiclesMakers
})
