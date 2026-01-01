'use client';

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

interface ReduxState {
  darkmode: boolean;
  [key: string]: any;
}

const initialState: ReduxState = {
  darkmode: false,
};

const reduxSlice = createSlice({
  name: 'redux',
  initialState,
  reducers: {
    setReduxData: (state, action: PayloadAction<Partial<ReduxState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

const rootReducer = combineReducers({
  redux: reduxSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const { setReduxData } = reduxSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
