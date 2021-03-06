import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeView from './HomeView';
import DetailProduct from '../DetailProduct/DetailProduct';
import ListProduct from '../ListProduct/ListProduct';

const Stack = createStackNavigator();

const Home = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeView"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
      <Stack.Screen name="ListProduct" component={ListProduct} />
    </Stack.Navigator>
  );
};

export default Home;
