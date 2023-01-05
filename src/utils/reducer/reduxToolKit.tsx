import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../reducer/reducer';

export const store = configureStore({
  reducer: {
    main: Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
