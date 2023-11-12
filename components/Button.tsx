import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface IButtonProps {
  handleClick: () => void;
  title: string;
  type: 'submit' | 'close';
}

export function Button({handleClick, title, type}: IButtonProps) {
  const buttonTypeStyles = {
    backgroundColor:
      type === 'close' ? 'white' : type === 'submit' ? '#eb5e28' : 'white',
    borderWidth: type === 'close' ? 1 : type === 'submit' ? 0 : 0,
    borderColor:
      type === 'close' ? '#a4161a' : type === 'submit' ? '#eb5e28' : 'white',
  };
  const textTypeStyles = {
    color: type === 'close' ? '#a4161a' : type === 'submit' ? 'white' : 'white',
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
