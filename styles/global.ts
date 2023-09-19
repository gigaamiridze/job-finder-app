import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

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
  paddingHorizontal: {
    paddingHorizontal: SIZES.medium,
  },
});

export default globalStyles;
