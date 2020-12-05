import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CartView from './CartView';
import DetailProduct from '../../Shop/DetailProduct/DetailProduct';

const Stack = createStackNavigator();

const Cart = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartView"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CartView" component={CartView} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default Cart;
