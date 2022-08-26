import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {InlineProposeStyles as IPS} from './InlineProposeStyles';

interface iIPProps {
  text?: string;
  linkText: string;
  f: any;
}

const InlinePropose = ({f, text, linkText}: iIPProps) => {
  return (
    <View style={IPS.wrapper}>
      <Text style={IPS.text}>{text ? `${text + '  '}` : null}</Text>
      <Pressable onPress={f}>
        <Text style={[IPS.text, IPS.link]}>{linkText}</Text>
      </Pressable>
    </View>
  );
};

export default InlinePropose;
