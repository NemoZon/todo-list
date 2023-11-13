import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodos, storeTodos} from '../store/slices/todo';
import {AppDispatch, stateType} from '../store';

export interface IGateProps {
  children: JSX.Element[] | JSX.Element;
}

export function Gate({children}: IGateProps) {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: stateType) => state.todoReducer.todos);

  useEffect(() => {
    const fetch = async () => {
      const fetchTodosRes = await dispatch(fetchTodos()).unwrap();
      if (!fetchTodosRes) {
        if (todos.length === 0) {
          dispatch(
            storeTodos({
              todos: [
                {
                  id: 0,
                  title: 'Write things to do for today',
                  desc: 'Click on the "plus" button, then fill in the fields and click "create"',
                  color: '#1982c4',
                  isChecked: false,
                },
              ],
            }),
          );
        } else {
          dispatch(
            storeTodos({
              todos: todos,
            }),
          );
        }
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    dispatch(storeTodos({todos: todos}));
  }, [dispatch, todos]);

  return <View style={styles.gate}>{children}</View>;
}

const styles = StyleSheet.create({
  gate: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});
