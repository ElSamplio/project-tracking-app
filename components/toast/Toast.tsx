import React, { useEffect, useRef } from "react";
import { Text, Animated, Easing } from "react-native";
import styles from "./style";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "@/redux/slices/messageSlice";

interface ToastProps {
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ duration = 2000 }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const dispatch: AppDispatch = useDispatch();
  const message = useSelector((state: RootState) => state.message.message);

  const clearAnimated = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      dispatch(clearMessage());
    });
  };

  useEffect(() => {
    if (message) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();

      const hideToast = setTimeout(clearAnimated, duration);

      return () => clearTimeout(hideToast);
    } else {
      clearAnimated();
    }
  }, [message, duration]);

  if (!message) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

export default Toast;
