import React, {useRef} from 'react';
import {PanResponder, Animated} from 'react-native';

export interface ISwipeToDeleteProps {
  children: JSX.Element;
  onSwipeDelete: () => void;
}

const SwipeToDelete = ({children, onSwipeDelete}: ISwipeToDeleteProps) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event([null, {dx: pan.x}]),

    onPanResponderRelease: (e, gesture) => {
      if (gesture.dx > 120) {
        onSwipeDelete();
        Animated.spring(pan, {
          toValue: {x: 500, y: 0},
          useNativeDriver: false,
        }).start();
      } else if (gesture.dx < -120) {
        onSwipeDelete();
        Animated.spring(pan, {
          toValue: {x: -500, y: 0},
          useNativeDriver: false,
        }).start();
      } else {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <Animated.View
      style={{
        transform: [{translateX: pan.x}],
      }}
      {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};

export default SwipeToDelete;
