import React from 'react';
import {Pressable, Text} from 'react-native';
import {mainStyles as MS} from '../../assets/styles/mainStyles';

const CustomButton: React.FC<{
  text: string;
  f: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  disabled?: boolean;
}> = ({text, f, disabled}) => {
  return (
    <Pressable disabled={disabled} style={MS.Button} onPress={f}>
      <Text style={MS.Button__text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
