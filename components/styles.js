import {StyleSheet, Dimensions} from 'react-native';

const COLORS = {
  // main: 'rgba(3, 102, 53, 1)',
  main: '#3A8866',
  mainLight: 'rgba(3, 102, 53, 0.5)',
  main2: '#1fab89',
  text1: '#353535',
  text2: '#606060',
  text3: '#a0a0a0',
  lightGrey: '#f1f1f1',
  white: 'white',
  black: 'black',
  gold: '#cba860',
};

const STYLES = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text1,
  },
  textBig: {
    fontSize: 18,
    color: COLORS.text1,
  },
  textBigBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text1,
  },

  textMedium: {
    fontSize: 16,
    color: COLORS.text1,
  },
  textMediumBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text2,
  },

  textSmall: {
    fontSize: 14,
    color: COLORS.text3,
  },
  textSmallBold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text3,
  },
});

const DIMENSIONS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export {COLORS, STYLES, DIMENSIONS};
