import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Todo from './Todo';
import {AppDispatch, stateType} from '../store';
import {changeIsChecked, deleteTodo} from '../store/slices/todo';

function TodoList() {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector((state: stateType) => state.todoReducer.todos);
  const deleteElement = useCallback(
    (id: number) => {
      setTimeout(() => {
        dispatch(deleteTodo(id));
      }, 200);
    },
    [dispatch],
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        {todoList && todoList.length > 0 ? (
          todoList.map(({id, title, desc, color, isChecked}) => (
            <Todo
              key={id}
              title={title}
              desc={desc}
              color={color}
              isChecked={isChecked}
              handleCheckboxClick={value => {
                dispatch(changeIsChecked({id: id, isChecked: value}));
              }}
              onSwipeDelete={() => deleteElement(id)}
            />
          ))
        ) : (
          <Text style={styles.noTodos}>Everything is done 🎉</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  noTodos: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
});

export default TodoList;
