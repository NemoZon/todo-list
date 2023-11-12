import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import AddButton from './components/AddButton';
import TodoList from './components/TodoList';
import Modal from './components/Modal';

function App(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
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
