import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import todoReducer from './slices/todo';

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export interface stateType {
  todoReducer: {
    order: undefined | 'ASC' | 'DESC';
    todos: Array<{
      id: number;
      title: string;
      desc: string;
      color: string;
      isChecked: boolean;
    }>;
    lastId: number;
    colors: Array<string>;
  };
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
