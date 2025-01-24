import { configureStore } from '@reduxjs/toolkit';
import { animeApi } from './services/animeApi';

export default configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});
