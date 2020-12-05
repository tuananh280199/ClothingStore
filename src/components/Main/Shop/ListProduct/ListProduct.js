import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  RefreshControl,
  Alert,
} from 'react-native';

import backList from '../../../../assets/appIcon/backList.png';

import {useDispatch, useSelector} from 'react-redux';
import {
  fetchListProducts,
  getMoreListProducts,
} from '../../../../redux/actions';

import Loading from '../../../Loading/Loading';
const {height} = Dimensions.get('window');
const url = 'http://192.168.1.240/apiMyShop/images/product/';

const ListProduct = (props) => {
  const loading = useSelector((state) => state.loading);
  const listProducts = useSelector((state) => state.listProducts.list);
  const err = useSelector((state) => state.listProducts.error);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const {category} = props.route.params;
    const idType = category.id;
    dispatch(fetchListProducts(idType, page));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    const {category} = props.route.params;
    const idType = category.id;
    const newPage = page + 1;
    dispatch(getMoreListProducts(idType, newPage));
    console.log(err);
    setPage(newPage);
    setRefreshing(false);
    if (err !== null) {
      Alert.alert(
        'Notice',
        'Out of product',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
        {cancelable: false},
      );
      setRefreshing(false);
    }
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const goToDetail = (detailProduct, cate) => {
    const {navigation} = props;
    navigation.navigate('Home', {
      screen: 'DetailProduct',
      params: {
        product: detailProduct,
        category: cate,
      },
    });
  };

  const {
    container,
    wrapper,
    header,
    title,
    iconBack,
    productContainer,
    productInfo,
    productImage,
    lastRowInfo,
    txtName,
    txtPrice,
    txtMaterial,
    txtColor,
    txtShowDetail,
    wrapFlatlist,
  } = styles;

  const {category} = props.route.params;

  const listView = (
    <SafeAreaView style={wrapFlatlist}>
      <FlatList
        data={listProducts}
        renderItem={({item}) => (
          <View style={productContainer}>
            <Image
              source={{uri: `${url}${item.images[0]}`}}
              style={productImage}
            />
            <View style={productInfo}>
              <Text style={txtName}>{item.name}</Text>
              <Text style={txtPrice}>{item.price}$</Text>
              <Text style={txtMaterial}>Material {item.material}</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color {item.color}</Text>
                <View
                  style={{
                    backgroundColor: item.color.toLowerCase(),
                    height: 16,
                    width: 16,
                    borderRadius: 8,
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.2}
                  onPress={() => goToDetail(item, category)}>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
  return (
    <View style={container}>
      <View style={wrapper}>
        <View style={header}>
          <TouchableOpacity activeOpacity={0.2} onPress={goBack}>
            <Image source={backList} style={iconBack} />
          </TouchableOpacity>
          <Text style={title}>{category.name}</Text>
          <View style={{width: 30}} />
        </View>
        {loading ? <Loading /> : listView}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#2E2728',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: {width: 0, height: 3},
    elevation: 8,
    margin: 8,
    fontFamily: 'Avenir',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: height / 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapFlatlist: {
    flex: 1,
  },
  iconBack: {
    height: 30,
    width: 30,
  },
  title: {
    color: '#B10D65',
    fontSize: 20,
  },
  productContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderTopColor: '#D6D6D6',
    borderBottomColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderWidth: 1,
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtName: {
    color: '#662F90',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 20,
  },
  txtPrice: {
    color: '#ff6666',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    fontFamily: 'Avenir',
  },
  txtColor: {
    fontFamily: 'Avenir',
  },
  viewColor: {
    backgroundColor: 'cyan',
    height: 14,
    width: 14,
    borderRadius: 8,
  },
  txtShowDetail: {
    color: '#B10D65',
    fontFamily: 'Avenir',
    fontSize: 12,
  },
});

export default ListProduct;
