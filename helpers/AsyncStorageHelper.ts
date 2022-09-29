import AsyncStorage from "@react-native-async-storage/async-storage";

const setString = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

const getString = async (key: string, defaultValue?: string) => {
  const val = await AsyncStorage.getItem(key);
  return val || defaultValue || null;
};

const setNumber = async (key: string, value: number) => {
  await AsyncStorage.setItem(key, value.toString());
};

const getNumber = async (key: string, defaultValue?: number) => {
  const val = parseFloat(await AsyncStorage.getItem(key));
  return val || defaultValue || null;
};

const setBoolean = async (key: string, value: boolean) => {
  await AsyncStorage.setItem(key, value.toString());
};

const getBoolean = async (key: string, defaultValue?: boolean) => {
  const val = await AsyncStorage.getItem(key);
  if (val == "true" || val == "false") return val;
  if (typeof defaultValue == "boolean") return defaultValue;
  return null;
};

const setObject = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const getObject = async (key: string, defaultValue?: any) => {
  const val = await AsyncStorage.getItem(key);
  return JSON.parse(val) || defaultValue || null;
};

const AsyncStorageHelper = {
  setString,
  getString,
  setNumber,
  getNumber,
  getBoolean,
  setBoolean,
  setObject,
  getObject,
};

export default AsyncStorageHelper;