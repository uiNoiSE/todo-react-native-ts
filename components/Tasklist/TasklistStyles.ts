import {StyleSheet} from 'react-native';

export const TasklistStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 279,
    backgroundColor: '#FFFFFF',
    paddingTop: 13,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 12,

    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 15,
    shadowRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.15);',
    elevation: 15,
  },

  listHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
