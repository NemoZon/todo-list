import React, {useCallback, useState} from 'react';
import {
  Modal as ReactModal,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button} from './Button';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, stateType} from '../store';
import {addTodo} from '../store/slices/todo';

export interface IModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

export function Modal({modalVisible, setModalVisible}: IModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [title, onChangeTitle] = useState('');
  const [desc, onChangeDesc] = useState('');
  const colors = useSelector((state: stateType) => state.todoReducer.colors);
  const [todoColors, setTodoColors] = useState(
    colors.map((color, index) => {
      return {
        color: color,
        active: index === 0 ? true : false,
      };
    }),
  );
  const handleSubmit = useCallback(
    (titleValue: string, descValue: string, color: string) => {
      dispatch(
        addTodo({
          title: titleValue,
          desc: descValue,
          color: color,
          isChecked: false,
        }),
      );
    },
    [dispatch],
  );

  const lengthVerification = useCallback((value: string, length: number) => {
    if (value.length <= length) {
      return true;
    }
    return false;
  }, []);

  return (
    <ReactModal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Create a new task</Text>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={value =>
                lengthVerification(value, 25) ? onChangeTitle(value) : ''
              }
              value={title}
            />
            <TextInput
              style={styles.input}
              onChangeText={value =>
                lengthVerification(value, 100) ? onChangeDesc(value) : ''
              }
              value={desc}
              placeholder="Description"
            />
            <View style={styles.colors}>
              {todoColors.map(({color, active}) => {
                const colorStyle = {
                  borderColor: active ? color : 'white',
                  backgroundColor: color,
                };

                return (
                  <TouchableOpacity
                    style={[styles.color, colorStyle]}
                    onPress={() =>
                      setTodoColors(
                        todoColors.map(elem => {
                          elem.active = false;
                          if (color === elem.color) {
                            elem.active = true;
                          }
                          return elem;
                        }),
                      )
                    }
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.buttons}>
            <Button
              handleClick={() => {
                onChangeTitle('');
                onChangeDesc('');
                setModalVisible(false);
              }}
              title="Cancel"
              type="outlined"
              color="#a4161a"
            />
            <Button
              handleClick={() => {
                const color = todoColors.find(elem => elem.active);
                handleSubmit(title, desc, color?.color || 'white');
                onChangeTitle('');
                onChangeDesc('');
                setModalVisible(false);
              }}
              title="Create"
              type="contained"
              color="#eb5e28"
            />
          </View>
        </View>
      </View>
    </ReactModal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    minWidth: '80%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  colors: {
    flexDirection: 'row',
    columnGap: 10,
  },
  color: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 3,
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  inputs: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 5,
    borderWidth: 1,
    borderColor: '#eb5e28',
    borderRadius: 20,
    padding: 10,
  },
  modalView: {
    width: '100%',
    rowGap: 40,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modal;
