import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import AddButton from './components/AddButton';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import {Provider} from 'react-redux';
import store from './store';

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
});

export default App;
