import React, { useEffect, useRef, useState } from 'react';
import { Text, Animated, Easing } from 'react-native';
import styles from './style';

interface ToastProps {
  message: string;
  visible: boolean;
  duration?: number; // Duration in milliseconds
}

const Toast: React.FC<ToastProps> = ({ message, visible, duration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();

      const hideToast = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          setIsVisible(false);
        });
      }, duration);

      return () => clearTimeout(hideToast);
    } else {
      // Handle immediate hiding when 'visible' changes to false
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setIsVisible(false);
      });
    }
  }, [visible, duration]);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

export default Toast;
