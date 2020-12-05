import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Shop from './Shop/Shop';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHisory from '../OrderHistory/OrderHistory';
import DrawerCustom from './DrawerCustom';

import getToken from '../../AsyncStorage/getToken';
import checkLogin from '../../networking/checkLogin';
import refreshToken from '../../networking/refreshToken';
import {useDispatch} from 'react-redux';

import {userSignIn} from '../../redux/actions/index';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getToken()
      .then((token) => checkLogin(token))
      .then((res) => res.json())
      .then((res) => {
        dispatch(userSignIn(res.user));
      })
      .catch((error) => console.log(error));

    const refreshTokenInterval = setInterval(refreshToken, 60000); //1 phút refresh lại token để gia hạn thời gian tồn tại của token

    return () => {
      clearInterval(refreshTokenInterval);
    };
  }, []);

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Shop"
      drawerContent={(props) => <DrawerCustom {...props} />}>
      <Drawer.Screen name="Shop" component={Shop} />
      <Drawer.Screen name="Authentication" component={Authentication} />
      <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
      <Drawer.Screen name="OrderHisory" component={OrderHisory} />
    </Drawer.Navigator>
  );
};

export default Main;
