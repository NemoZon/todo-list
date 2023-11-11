import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import AddButton from './components/AddButton';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <Header title="JUST DO IT" />
      <TodoList />
      <AddButton handleClick={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#252422',
    width: '100%',
    height: '100%',
  },
});

export default App;
