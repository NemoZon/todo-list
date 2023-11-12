import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
  ]);

  const deleteElement = useCallback((id: number) => {
    setTimeout(
      () => setTodoList(value => value.filter(elem => elem.id !== id)),
      200,
    );
  }, []);

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
