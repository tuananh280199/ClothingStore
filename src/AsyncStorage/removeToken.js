import AsyncStorage from '@react-native-community/async-storage';

const removeToken = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};

export default removeToken;
