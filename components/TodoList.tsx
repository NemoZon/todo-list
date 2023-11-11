import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Todo from './Todo';

function TodoList() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: 'title 1',
      desc: 'desc 1',
      color: 'red',
      isChecked: false,
    },
    {
      id: 1,
      title: 'title 12',
      desc: 'desc 12',
      color: 'red',
      isChecked: false,
    },
    {
      id: 2,
      title: 'title 2',
      desc: 'desc 2',
      color: 'red',
      isChecked: false,
    },
    {
      id: 3,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 31,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 32,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 33,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 34,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 35,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 36,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 37,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 38,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 39,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 311,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 312,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
    {
      id: 313,
      title: 'title 3',
      desc: 'desc 3',
      color: 'red',
      isChecked: false,
    },
  ]);

  const deleteElement = useCallback((id: number) => {
    setTimeout(
      () => setTodoList(value => value.filter(elem => elem.id !== id)),
      200,
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      {todoList && todoList.length > 0 ? (
        todoList.map(({id, title, desc, color, isChecked}) => (
          <Todo
            key={id}
            title={title}
            desc={desc}
            color={color}
            isChecked={isChecked}
            onSwipeDelete={() => deleteElement(id)}
          />
        ))
      ) : (
        <Text style={styles.noTodos}>Everything is done 🎉</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
