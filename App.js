import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const longExample = async (value) => {
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
      const user = {
        name: "Beltrano",
        id: 14,
        age: 26,
      };
      await AsyncStorage.setItem("user", JSON.stringify(user));

      //--------------------------- Obter objeto
      const userSaved = JSON.parse(await AsyncStorage.getItem("user"));
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

  longExample();

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
