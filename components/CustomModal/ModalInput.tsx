import React from 'react';
import {TextInput} from 'react-native';
import {InputStyles as IS} from '../Input/InputStyles';

interface iAutoFocus {
  (text: string): void;
}

interface iModalInput {
  placeholder: string;
  onChangeText: iAutoFocus;
  value: string;
}

const ModalInput = ({placeholder, onChangeText}: iModalInput) => {
  return (
    <TextInput
      placeholderTextColor="#000"
      underlineColorAndroid="transparent"
      returnKeyType="done"
      onChangeText={onChangeText}
      style={IS.textfield}
      placeholder={placeholder}
      autoFocus={true}
    />
  );
};

export default ModalInput;
