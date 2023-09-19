import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundWhite: {
    backgroundColor: COLORS.lightWhite,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
});

export default globalStyles;
