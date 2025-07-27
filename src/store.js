// store.js - creates a global redux store
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';

// all components in the app can access the state managed by the venueReducer() 
export default configureStore({
  reducer: {
    venue: venueReducer,
  },
});
