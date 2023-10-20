import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useToken from "./hooks/useToken";

export default function App() {
  const { token, updateToken, clearToken } = useToken();

  // if (!token) return <Redirect href="/login" />;

  return (
    <View style={styles.container}>
      <Text>Token: {token}</Text>
      <Button
        title="Set Token"
        onPress={() => updateToken("Bearer " + Math.random())}
      />

      <Button title="Clear Token" onPress={() => clearToken()} />
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
