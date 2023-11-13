import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from './Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {setOrder, sortByChecked} from '../store/slices/todo';
import {stateType} from '../store';

export function SortableButton() {
  const dispatch = useDispatch();
  const isSortByChecked = useSelector(
    (state: stateType) => state.todoReducer.order,
  );

  const changeSortBy = useCallback(() => {
    switch (isSortByChecked) {
      case undefined:
        dispatch(setOrder('ASC'));
        break;
      case 'ASC':
        dispatch(setOrder('DESC'));
        break;
      case 'DESC':
        dispatch(setOrder('ASC'));
        break;
      default:
        dispatch(setOrder(undefined));
        break;
    }
    dispatch(sortByChecked());
  }, [dispatch, isSortByChecked]);

  return (
    <View style={styles.sortButton}>
      <Button
        handleClick={changeSortBy}
        title="Sort"
        type="contained"
        color="#eb5e28"
        icon={
          isSortByChecked === undefined ? (
            <Icon name="rocket" size={16} color="white" />
          ) : isSortByChecked === 'ASC' ? (
            <Icon name="sort-up" size={16} color="white" />
          ) : (
            <Icon name="sort-down" size={16} color="white" />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sortButton: {
    position: 'absolute',
    bottom: 25,
    right: '10%',
  },
});
