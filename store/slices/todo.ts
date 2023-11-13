import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface Todo {
  id: string | number[];
  title: string;
  desc: string;
  color: string;
  isChecked: boolean;
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Fetch todos error: ', e);
  }
});

export const storeTodos = createAsyncThunk(
  'todos/storeTodos',
  async (value: {todos: Todo[]}) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem('todos', jsonValue);
    } catch (e) {
      console.error('Fetch todos error: ', e);
    }
  },
);

const initialState: {
  status: string | number[];
  error: unknown;
  order: undefined | 'ASC' | 'DESC';
  todos: Todo[];
  colors: string[];
} = {
  status: 'idle',
  error: null,
  order: undefined,
  todos: [],
  colors: ['#1982c4', '#6a4c93', '#ffca3a', '#8ac926'],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, {...action.payload, id: uuid.v4()}];
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    changeIsChecked(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isChecked: action.payload.isChecked,
          };
        }
        return todo;
      });
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
    deleteAllTodos(state) {
      state.todos = [];
    },
    sortByChecked(state) {
      if (state.order === 'ASC') {
        state.todos = state.todos.slice().sort((a, b) => {
          return a.isChecked === b.isChecked ? 0 : a.isChecked ? -1 : 1;
        });
      } else if (state.order === 'DESC') {
        state.todos = state.todos.slice().sort((a, b) => {
          return a.isChecked === b.isChecked ? 0 : b.isChecked ? -1 : 1;
        });
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload) {
          state.todos = action.payload.todos;
        }
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const {
  addTodo,
  deleteTodo,
  deleteAllTodos,
  sortByChecked,
  changeIsChecked,
  setOrder,
} = todosSlice.actions;

export default todosSlice.reducer;
