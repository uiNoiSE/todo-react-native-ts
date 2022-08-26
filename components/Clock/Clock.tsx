import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {ClockStyles as CS} from './ClockStyles';

export default function Clock() {
  const [time, setTime] = React.useState<Array<string>>([]);

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString('ru-RU');
      setTime(() => [...timeString.split(':')]);
    };
    updateTime();
    const interval = setInterval(() => updateTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const item = time.map((el, key) => (
    <View key={key} style={CS.tile}>
      <View style={CS.tile__accent} />
      <Text style={CS.tile__text}>{el}</Text>
    </View>
  ));

  return (
    <View style={CS.wrapper}>
      {item}
      <View style={CS.colons}>
        <Text style={[CS.tile__text, CS.colons__first]}>:</Text>
        <Text style={[CS.tile__text, CS.colons__second]}>:</Text>
      </View>
    </View>
  );
}
