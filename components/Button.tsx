import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface IButtonProps {
  handleClick: () => void;
  title: string;
  type: 'contained' | 'outlined';
  color: string;
}

export function Button({handleClick, title, type, color}: IButtonProps) {
  const buttonTypeStyles = {
    backgroundColor:
      type === 'outlined' ? 'white' : type === 'contained' ? color : 'white',
    borderWidth: type === 'outlined' ? 1 : type === 'contained' ? 0 : 0,
    borderColor: color,
  };
  const textTypeStyles = {
    color:
      type === 'outlined'
        ? '#a4161a'
        : type === 'contained'
        ? 'white'
        : 'white',
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonTypeStyles]}
      onPress={handleClick}>
      <Text style={[styles.textStyle, textTypeStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
