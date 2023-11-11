import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface IAddButtonProps {
  handleClick: () => void;
}

function AddButton({handleClick}: IAddButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eb5e28',
    borderRadius: 50,
    overflow: 'hidden',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 20,
    right: '50%',
    transform: [{translateX: 25}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    lineHeight: 28,
    textAlignVertical: 'center',
  },
});

export default AddButton;
