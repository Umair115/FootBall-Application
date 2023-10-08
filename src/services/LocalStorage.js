import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  static async setData(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log(key,value)
      return true; // Indicate success
    } catch (error) {
      console.error('Error setting data to AsyncStorage:', error);
      return false; // Indicate failure
    }
  }

  static async getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log(value)
      return value;
    } catch (error) {
      console.error('Error getting data from AsyncStorage:', error);
      return null;
    }
  }

  static async removeData(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true; // Indicate success
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
      return false; // Indicate failure
  }
}
}

export default LocalStorage;