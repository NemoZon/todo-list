import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import AddButton from './components/AddButton';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <Header title="JUST DO IT" />
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
