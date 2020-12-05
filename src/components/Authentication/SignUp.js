import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';

import register from '../../networking/register';
import * as styles from '../../constants/styles';

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const registerUser = () => {
    register(email, name, password)
      .then((res) => res.text())
      .then((text) => {
        if (text === 'THANH_CONG') onSuccessed();
        else onFailed();
      })
      .catch((error) => console.log(error));
  };

  const onSuccessed = () => {
    Alert.alert(
      'Notice',
      'Sign Up Successfully',
      [
        {
          text: 'OK',
          onPress: () => {
            setName('');
            setEmail('');
            setPassword('');
            setRePassword('');
            props.gotoSignIn();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const onFailed = () => {
    Alert.alert(
      'Notice',
      'Email has been used by other',
      [
        {
          text: 'OK',
          onPress: () => setEmail(''),
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
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <TextInput
        style={stylesOfSignInAndSignUp.inputStyle}
        placeholder="Re-enter your password"
        secureTextEntry
        value={rePassword}
        onChangeText={(text) => setRePassword(text)}
      />
      <TouchableOpacity
        style={stylesOfSignInAndSignUp.bigButton}
        activeOpacity={0.2}
        onPress={registerUser}>
        <Text style={stylesOfSignInAndSignUp.bigButtonText}>SIGN UP NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
