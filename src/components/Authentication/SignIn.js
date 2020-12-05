import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import signIn from '../../networking/signIn';
import {userSignIn} from '../../redux/actions/index';

import * as styles from '../../constants/styles';

import saveToken from '../../AsyncStorage/saveToken';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSignIn = () => {
    signIn(email, password)
      .then((res) => res.json())
      .then((res) => {
        if (res.user === 'SAI_THONG_TIN_DANG_NHAP') {
          onFailed();
        } else {
          dispatch(userSignIn(res.user));
          setEmail('');
          setPassword('');
          props.goBackToMain();
          saveToken(res.token);
        }
      }) //user đc trả về từ api login
      .catch(() => onFailed());
  };

  const onFailed = () => {
    Alert.alert(
      'Notice',
      'Wrong email or password ',
      [
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );
  };

  const {stylesOfSignInAndSignUp} = styles;

  return (
    <View>
      <TextInput
        style={stylesOfSignInAndSignUp.inputStyle}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={stylesOfSignInAndSignUp.inputStyle}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={stylesOfSignInAndSignUp.bigButton}
        activeOpacity={0.2}
        onPress={onSignIn}>
        <Text style={stylesOfSignInAndSignUp.bigButtonText}>SIGN IN NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
