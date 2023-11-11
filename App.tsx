import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import AddButton from './components/AddButton';
import Todo from './components/Todo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <Header title="JUST DO IT" />
      <Todo
        title="title"
        desc="desc"
        color="red"
        isChecked={false}
        onSwipeDelete={() => {}}
      />
      <AddButton handleClick={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    position: 'relative',
    backgroundColor: '#252422',
    width: '100%',
    height: '100%',
  },
});

export default App;
