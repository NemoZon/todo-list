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

export interface IModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

export function Modal({modalVisible, setModalVisible}: IModalProps) {
  const [title, onChangeTitle] = useState('');
  const [desc, onChangeDesc] = useState('');
  const [todoColors, setTodoColors] = useState([
    {
      color: '#1982c4',
      active: true,
    },
    {
      color: '#6a4c93',
      active: false,
    },
    {
      color: '#ffca3a',
      active: false,
    },
    {
      color: '#8ac926',
      active: false,
    },
  ]);

  const handleSubmit = (title: string, desc: string, color: string) => {};

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
                setModalVisible(false);
              }}
              title="Cancel"
              type="close"
            />
            <Button
              handleClick={() => {
                const color = todoColors.find(elem => elem.active);
                handleSubmit(title, desc, color?.color || 'white');
                setModalVisible(false);
              }}
              title="Create"
              type="submit"
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
