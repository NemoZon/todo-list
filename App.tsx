import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './components/Header';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Header title="JUST DO IT" />
    </SafeAreaView>
  );
}

export default App;
