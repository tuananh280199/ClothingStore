import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actionCreator from '../../../../redux/actions/index';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';

import Loading from '../../../Loading/Loading';

const {height, width} = Dimensions.get('window');
const url = 'http://192.168.1.240/apiMyShop/images/type/';

const Category = (props) => {
  const types = useSelector((state) => state.types);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.fetchTypes());
  }, []);

  const goToListProduct = (type) => {
    const {navigation} = props;
    navigation.navigate('Home', {
      screen: 'ListProduct',
      params: {category: type},
    });
  };

  const {wrapper, textStyle, imageStyle, cateTitle} = styles;
  const swiper = (
    <Swiper
      autoplay
      loop
      autoplayTimeout={3}
      autoplayDirection
      index={0}
      showPagination>
      {types.map((e) => (
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => goToListProduct(e)}
          key={e.id}>
          <ImageBackground
            source={{uri: `${url}${e.image}`}}
            style={imageStyle}>
            <Text style={cateTitle}>{e.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </Swiper>
  );

  return (
    <View style={wrapper}>
      <View style={{height: 40}}>
        <Text style={textStyle}>List Category</Text>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <View style={{flex: 5}}>{types.length ? swiper : null}</View>
      )}
    </View>
  );
};

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465; //kích thước ảnh : 933x465

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    height: height * 0.36,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#2E272B',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: {width: 0, height: 3},
    elevation: 8,
    margin: 8,
  },
  textStyle: {
    fontSize: 20,
    color: '#ff66b3',
    textTransform: 'uppercase',
  },
  imageStyle: {
    width: imageWidth,
    height: imageHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateTitle: {
    fontSize: 19,
    fontFamily: 'Avenir',
    color: '#b3ccff',
  },
});

export default Category;
