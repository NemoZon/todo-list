import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 0,
      title: 'Write things to do for today',
      desc: 'Click on the "plus" button, then fill in the fields and click "create"',
      color: '#1982c4',
      isChecked: false,
    },
  ],
  lastId: 0,
  colors: ['#1982c4', '#6a4c93', '#ffca3a', '#8ac926'],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.lastId = state.lastId + 1;
      state.todos = [...state.todos, {...action.payload, id: state.lastId}];
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.lastId = state.todos[state.todos.length - 1]?.id || -1;
    },
    deleteAllTodos(state) {
      state.todos = [];
      state.lastId = -1;
    },
  },
});

export const {addTodo, deleteTodo, deleteAllTodos} = todosSlice.actions;

export default todosSlice.reducer;
