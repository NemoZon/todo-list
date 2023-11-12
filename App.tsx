import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import AddButton from './components/AddButton';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import {Provider} from 'react-redux';
import store from './store';
import {Button} from './components/Button';

function App(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.app}>
        <Header title="JUST DO IT" />
        <TodoList />
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <AddButton
          handleClick={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <View style={styles.sortButton}>
          <Button
            handleClick={() => {}}
            title="sort"
            type="contained"
            color="#eb5e28"
          />
        </View>
      </SafeAreaView>
    </Provider>
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
  sortButton: {
    position: 'absolute',
    bottom: 25,
    right: '10%',
  },
});

export default App;
