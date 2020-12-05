import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import icBack from '../../assets/appIcon/back_white.png';

import getOrderHistory from '../../networking/getOrderHistory';
import getToken from '../../AsyncStorage/getToken';

const OrderHistory = (props) => {
  const [arrOrder, setArrOrder] = useState([]);

  useEffect(() => {
    getToken()
      .then((token) => getOrderHistory(token))
      .then((arrOrder) => setArrOrder(arrOrder))
      .catch((e) => console.log(e));
  }, [arrOrder]);

  const goBackToMain = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const {wrapper, header, headerTitle, backIconStyle, body, orderRow} = styles;

  return (
    <View style={wrapper}>
      <View style={header}>
        <TouchableOpacity onPress={goBackToMain}>
          <Image source={icBack} style={backIconStyle} />
        </TouchableOpacity>
        <Text style={headerTitle}>Order History</Text>
        <View />
      </View>
      <View style={body}>
        <ScrollView>
          {arrOrder.map((e) => (
            <View style={orderRow} key={e.id}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Order id:
                </Text>
                <Text style={{color: '#2ABB9C'}}>ORD{e.id}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  OrderTime:
                </Text>
                <Text style={{color: '#C21C70'}}>{e.date_order}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Status:
                </Text>
                <Text style={{color: '#2ABB9C'}}>
                  {e.status ? 'Completed' : 'Pending'}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Total:
                </Text>
                <Text style={{color: '#C21C70', fontWeight: 'bold'}}>
                  {e.total}$
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');

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
  backIconStyle: {
    width: 30,
    height: 30,
  },
  body: {
    flex: 10,
    backgroundColor: '#F6F6F6',
  },
  orderRow: {
    height: width / 3,
    justifyContent: 'space-around',
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
});

export default OrderHistory;
