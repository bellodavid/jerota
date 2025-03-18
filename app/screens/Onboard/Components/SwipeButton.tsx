// components/SwipeButton.tsx
import React, { useRef, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Animated, 
  PanResponder,
  Dimensions,
 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SwipeButtonProps {
  onComplete: () => void;
}

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = width - 40;
const SWIPE_THRESHOLD = BUTTON_WIDTH * 0.75;

const SwipeButton: React.FC<SwipeButtonProps> = ({ onComplete }) => {
  const [swiped, setSwiped] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;
  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newX = Math.max(0, Math.min(gestureState.dx, BUTTON_WIDTH - 60));
        translateX.setValue(newX);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx >= SWIPE_THRESHOLD) {
          // Complete swipe
          Animated.timing(translateX, {
            toValue: BUTTON_WIDTH - 60,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setSwiped(true);
            onComplete();
          });
        } else {
          // Reset position
          Animated.spring(translateX, {
            toValue: 0,
            speed: 12,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <Text style={styles.trackText}>Swipe to Get Started</Text>
        <Animated.View 
          style={[
            styles.thumb,
            { transform: [{ translateX }] },
          ]}
          {...panResponder.panHandlers}
        >
          <Ionicons name="arrow-forward" size={24} color="white" />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 8,
  },
  track: {
    width: BUTTON_WIDTH,
    height: 60,
    backgroundColor: '#222',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  trackText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  thumb: {
    position: 'absolute',
    left: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SwipeButton;