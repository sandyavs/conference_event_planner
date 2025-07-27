// store.js - creates a global redux store
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

// all components in the app can access the state managed 
// by venueReducer(), avReducer()
export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer
  },
});
