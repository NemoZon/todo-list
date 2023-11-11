import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {StyleSheet, View, Text} from 'react-native';
import SwipeToDelete from './SwipeToDelete';

export interface ITodoProps {
  title: string;
  desc: string;
  color: string;
  isChecked: boolean;
  onSwipeDelete: () => void;
}

function Todo({title, desc, color, isChecked, onSwipeDelete}: ITodoProps) {
  const [isDone, setIsDone] = useState(isChecked);
  const propsStyles = {
    todo: {
      backgroundColor: isDone ? '#2b9348' : 'white',
    },
    title: {
      color: isDone ? 'white' : 'black',
    },
    desc: {
      color: isDone ? 'white' : 'black',
    },
    point: {
      backgroundColor: color,
    },
  };

  return (
    <SwipeToDelete onSwipeDelete={onSwipeDelete}>
      <View style={{...styles.todo, ...propsStyles.todo}}>
        <View style={styles.text}>
          <View style={styles.titleContainer}>
            <Text style={{...styles.title, ...propsStyles.title}}>{title}</Text>
            <View style={{...styles.point, ...propsStyles.point}} />
          </View>
          <Text style={{...styles.desc, ...propsStyles.desc}}>{desc}</Text>
        </View>
        <BouncyCheckbox
          fillColor="#2b9348"
          unfillColor="transparent"
          onPress={value => {
            setIsDone(value);
          }}
          isChecked={isDone}
        />
      </View>
    </SwipeToDelete>
  );
}

const styles = StyleSheet.create({
  todo: {
    position: 'relative',
    borderRadius: 10,
    width: 350,
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    maxWidth: '70%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 2,
    fontSize: 14,
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Todo;
