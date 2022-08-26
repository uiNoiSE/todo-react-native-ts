import {Cache} from 'react-native-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const cache = new Cache({
  namespace: 'todo',
  policy: {
    maxEntries: 50000,
    stdTTL: 0,
  },
  backend: AsyncStorage,
});

export const currentUser = new Cache({
  namespace: 'currentUser',
  policy: {
    maxEntries: 50,
    stdTTL: 0,
  },
  backend: AsyncStorage,
});
