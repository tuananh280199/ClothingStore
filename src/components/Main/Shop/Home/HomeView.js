import React from 'react';
import {View, ScrollView} from 'react-native';

import Collecttion from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

const HomeView = (props) => {
  const {navigation} = props;
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <Collecttion navigation={navigation} />
        <Category navigation={navigation} />
        <TopProduct navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default HomeView;
