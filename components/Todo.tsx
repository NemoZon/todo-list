import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {StyleSheet, View, Text} from 'react-native';

export interface ITodoProps {
  title: string;
  desc: string;
  color: string;
  isChecked: boolean;
}

function Todo({title, desc, color, isChecked}: ITodoProps) {
  const [isDone, setIsDone] = useState(isChecked);

  const styles = StyleSheet.create({
    todo: {
      position: 'relative',
      backgroundColor: isDone ? '#2b9348' : 'white',
      borderRadius: 10,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    text: {
      maxWidth: '70%',
    },
    title: {
      color: isDone ? 'white' : 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    desc: {
      color: isDone ? 'white' : 'black',
      marginTop: 2,
      fontSize: 14,
    },
    point: {
      width: 10,
      height: 10,
      backgroundColor: color,
      borderRadius: 10,
      marginLeft: 10,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.todo}>
      <View style={styles.text}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.point} />
        </View>

        <Text style={styles.desc}>{desc}</Text>
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
  );
}

export default Todo;
