import React, {useState} from 'react';
import {StyleSheet, Pressable, Animated} from 'react-native';
import Home from '../assets/icons/Subtract.svg';
import Magic from '../assets/icons/Magic.svg';
import {StyledView} from './common';

interface DualIconSwitchProps {
  onToggle?: (enabled: boolean) => void;
  width?: number;
  height?: number;
  activeColor?: string;
  inactiveColor?: string;
}

const DualIconSwitch: React.FC<DualIconSwitchProps> = ({
  onToggle = () => {},
  width = 132,
  height = 75,
  activeColor = '#1D1C19',
  inactiveColor = '#1D1C19',
}) => {
  const [enabled, setEnabled] = useState(false);
  const anim = useState(new Animated.Value(0))[0];

  const toggleSwitch = () => {
    Animated.timing(anim, {
      toValue: enabled ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setEnabled(!enabled);
    onToggle(!enabled);
  };

  const thumbSize = height * 0.7;
  const padding = (height - thumbSize) / 2;

  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [padding - 10, width - 70 - padding + 10],
  });

  return (
    <Pressable
      style={[styles.container, {width, height}]}
      onPress={toggleSwitch}>
      <StyledView
        backgroundColor={enabled ? activeColor : inactiveColor}
        position={'absolute'}
        width={'100%'}
        height={'70%'}
        br={'100px'}
      />
      <Home fill={'#555'} style={[styles.staticIcon, {left: padding + 15}]} />
      <Magic fill={'#555'} style={[styles.staticIcon, {right: padding + 15}]} />
      <Animated.View
        style={[
          styles.thumb,
          {
            width: 70,
            height: thumbSize,
            transform: [{translateX}],
            top: padding,
          },
        ]}>
        {enabled ? <Magic fill={'#fff'} /> : <Home fill={'#fff'} />}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  thumb: {
    position: 'absolute',
    backgroundColor: '#31312B',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  staticIcon: {
    position: 'absolute',
  },
});

export default DualIconSwitch;
