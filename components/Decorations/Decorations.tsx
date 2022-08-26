import React from 'react';
import {View, ViewStyle} from 'react-native';
import {DecorationsStyles as DS} from './DecorationsStyles';

interface iDecoStyleProps {
  color?: ViewStyle;
}

const Decorations = ({color}: iDecoStyleProps) => {
  return (
    <>
      <View style={[DS.circle, DS.circle_first, color]} />
      <View style={[DS.circle, DS.circle_second, color]} />
    </>
  );
};

export default Decorations;
