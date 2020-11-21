import { combineReducers } from 'redux';
import { StoreState } from '../createStore';

import vehiclesMakers from './vehiclesMakers/reducer';
import vehiclesModels from './vehiclesModels/reducer';
import vehiclesVersions from './vehiclesVersions/reducer';

export default combineReducers<StoreState>({
  vehiclesMakers,
  vehiclesModels,
  vehiclesVersions
})
