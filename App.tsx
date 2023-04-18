import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorageHelper from "./helpers/AsyncStorageHelper";

export default function App() {
  // Versão da documentação: com async/await
  // const storeData = async (value) => {
  //   try {
  //     await AsyncStorage.setItem("@storage_Key", value);
  //     const savedValue = await AsyncStorage.getItem("@storage_Key");
  //     console.log(savedValue);
  //   } catch (e) {
  //     console.error(e)
  //   }
  // };
  // storeData("Fulano");

  // Versão com promise: then/catch
  // AsyncStorage.setItem("token", "ASD1234")
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  // AsyncStorage.getItem("token")
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  // Exemplo longo (várias operações)
  const longExample = async () => {
    try {
      //--------------------------- Salvar dados
      // armazenar string:
      await AsyncStorage.setItem("string1", "Ciclano");

      // armazenar int:
      const num1 = 100;
      await AsyncStorage.setItem("num1", num1.toString());

      // armazenar boolean:
      const bool1 = false;
      await AsyncStorage.setItem("bool1", bool1 ? "true" : "false");

      //--------------------------- Obter dados
      // obter string:
      const string1Saved = await AsyncStorage.getItem("string1");
      console.log(string1Saved);

      // obter int:
      const num1Saved = parseInt(await AsyncStorage.getItem("num1"));
      console.log(num1Saved);

      // obter boolean:
      const bool1Saved = (await AsyncStorage.getItem("bool1")) == "true";
      console.log(bool1Saved);

      //--------------------------- Salvar objeto
      type TUser = {
        name: string;
        id: Number;
        age: number;
      };

      const user: TUser = {
        name: "Beltrano",
        id: 14,
        age: 26,
      };
      await AsyncStorage.setItem("user", JSON.stringify(user));

      //--------------------------- Obter objeto (note o cast ao final com "as")
      const userSaved = JSON.parse(await AsyncStorage.getItem("user")) as TUser;
      console.log(userSaved);
      console.log(userSaved.name);

      //--------------------------- Listar todas as chaves
      const allKeys = await AsyncStorage.getAllKeys();
      console.log(allKeys);

      for (let key of allKeys) {
        const value = await AsyncStorage.getItem(key);

        console.log(key, value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // longExample();

  // Exemplo com helper (várias operações)
  const helperExample = async () => {
    try {
      // tratando strings
      await AsyncStorageHelper.setString("hstring", "Hello Helper");
      const stringResult = await AsyncStorageHelper.getString("hstring");
      console.log(stringResult);

      // string com retorno default
      const stringDefault = await AsyncStorageHelper.getString(
        "hstring2222",
        "mydefault" // se isto não existir, ele retorna null
      );
      console.log(stringDefault);

      // tratando number
      await AsyncStorageHelper.setNumber("hnumber", 123.456);
      const numberResult = await AsyncStorageHelper.getNumber("hnumber", 10);
      console.log(numberResult);

      // number com retorno default
      const numberDefault = await AsyncStorageHelper.getNumber(
        "hnumber222",
        123 // se isto não existir, ele retorna null
      );
      console.log(numberDefault);

      // tratando boolean
      await AsyncStorageHelper.setBoolean("hboolean", false);
      const booleanResult = await AsyncStorageHelper.getBoolean("hboolean");
      console.log(typeof booleanResult, booleanResult);

      // boolean com retorno default
      const booleanDefault = await AsyncStorageHelper.getBoolean(
        "hnumber222",
        true // se isto não existir, ele retorna null
      );
      console.log(booleanDefault);

      // tratando object
      type TUser = {
        name: string;
        id: Number;
        age: number;
      };

      const user: TUser = {
        name: "Beltrano",
        id: 14,
        age: 26,
      };

      await AsyncStorageHelper.setObject<TUser>("hobj", user);
      const objResult = await AsyncStorageHelper.getObject<TUser>("hobj2");
      console.log("get obj null without default:", objResult);

      // object com retorno default
      const objDefault = await AsyncStorageHelper.getObject<TUser>(
        "hnumber222",
        {
          name: "def",
          age: 99,
          id: 999,
        } // se isto não existir, ele retorna null
      );
      console.log("get obj null without default:", objDefault);

      const objResult3 = await AsyncStorageHelper.getObject<TUser>("hobj");
      console.log("get valid obj:", objResult3);
    } catch (e) {
      console.error(e);
    }
  };

  helperExample();

  return (
    <View style={styles.container}>
      <Text>(Check Console)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
