import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userSignIn} from '../../redux/actions/index';

import icBack from '../../assets/appIcon/back_white.png';

import getToken from '../../AsyncStorage/getToken';
import changeInfo from '../../networking/changeInfo';

const ChangeInfo = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [txtName, setTxtName] = useState(user.name);
  const [txtAddress, setTxtAddress] = useState(user.address);
  const [txtPhone, setTxtPhone] = useState(user.phone);

  const goBackToMain = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const changeInfomation = () => {
    getToken()
      .then((token) => changeInfo(token, txtName, txtPhone, txtAddress))
      .then((res) => res.json())
      .then((user) => {
        onSuccessed();
        dispatch(userSignIn(user));
      })
      .catch((error) => console.log(error));
  };

  const onSuccessed = () => {
    Alert.alert(
      'Notice',
      'Update infomation Successfully',
      [
        {
          text: 'OK',
          onPress: goBackToMain,
        },
      ],
      {cancelable: false},
    );
  };

  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    signInContainer,
    signInTextStyle,
    textInput,
  } = styles;

  return (
    <View style={wrapper}>
      <View style={header}>
        <TouchableOpacity onPress={goBackToMain}>
          <Image source={icBack} style={backIconStyle} />
        </TouchableOpacity>
        <Text style={headerTitle}>User Infomation</Text>
        <View />
      </View>
      <View style={body}>
        <TextInput
          style={textInput}
          placeholder="Enter your name"
          autoCapitalize="none"
          value={txtName}
          onChangeText={(text) => setTxtName(text)}
        />
        <TextInput
          style={textInput}
          placeholder="Enter your address"
          autoCapitalize="none"
          value={txtAddress}
          onChangeText={(text) => setTxtAddress(text)}
        />
        <TextInput
          style={textInput}
          placeholder="Enter your phone number"
          autoCapitalize="none"
          value={txtPhone}
          onChangeText={(text) => setTxtPhone(text)}
        />
        <TouchableOpacity style={signInContainer} onPress={changeInfomation}>
          <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: '#ff66b3',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontSize: 20,
  },
  backIconStyle: {width: 30, height: 30},
  body: {flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center'},
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#ff66b3',
    borderWidth: 1,
  },
  signInTextStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#ff66b3',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  signInStyle: {
    flex: 3,
    marginTop: 50,
  },
});

export default ChangeInfo;
