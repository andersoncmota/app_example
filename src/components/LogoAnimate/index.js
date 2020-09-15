import React, { useEffect } from 'react';
import { Animated, Image } from 'react-native';

const LogoAnimate = ({ src, timer }) => {
  const yPosition = new Animated.Value(100);
  const opacity = new Animated.Value(0);

  const animationStyle = {
    transform: [{ translateY: yPosition }],
    opacity,
  };

  useEffect(() => {
    Animated.timing(yPosition, {
      toValue: 1,
      duration: timer,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={animationStyle}>
      <Image source={src} style={{ width: 124, height: 78 }} />
    </Animated.View>
  );
};

export default LogoAnimate;
