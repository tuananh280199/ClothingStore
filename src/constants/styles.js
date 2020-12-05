import {StyleSheet} from 'react-native';

const inputStyle = {
  height: 50,
  backgroundColor: '#fff',
  marginBottom: 10,
  borderRadius: 20,
  paddingHorizontal: 15,
};

const bigButton = {
  height: 50,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
};

const bigButtonText = {
  fontFamily: 'Avenir',
  color: '#fff',
  fontWeight: '500',
};

export const stylesOfSignInAndSignUp = StyleSheet.create({
  inputStyle,
  bigButton,
  bigButtonText,
});
