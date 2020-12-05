import React, {useEffect} from 'react';
import {View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';
import getCart from '../../../AsyncStorage/getCart';
import {getProductCart} from '../../../redux/actions/index';

const Shop = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    getCart().then((cartArr) => dispatch(getProductCart(cartArr)));
  }, []);

  const toggleMenu = () => {
    const {navigation} = props;
    navigation.toggleDrawer();
  };

  const goToSearch = () => {
    const {navigation} = props;
    navigation.jumpTo('Search'); //jumpTo là event của TabBottomNavigation
  };

  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex: 1, backgroundColor: '#85A6C9'}}>
      <Header onToggleMenu={toggleMenu} goToSearch={goToSearch} />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return (
              <Ionicons name={iconName} size={size} style={{color: color}} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ff3399',
          inactiveTintColor: 'black',
          labelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{tabBarBadge: cart.length}}
        />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </View>
  );
};

export default Shop;
