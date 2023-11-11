import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface IHeaderProps {
  title: string;
}

function Header({title}: IHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
  header: {
    padding: 10,
    backgroundColor: '#eb5e28',
  },
});

export default Header;
