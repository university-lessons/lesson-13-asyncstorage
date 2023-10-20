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

  if (token === undefined) return <ActivityIndicator />;

  if (token)
    return (
      <View style={styles.container}>
        <Text>Token: {token}</Text>
        <Button title="Clear Token" onPress={() => clearToken()} />
        <StatusBar style="auto" />
      </View>
    );

  return (
    <View style={styles.container}>
      <Button
        title="Set Token"
        onPress={() => updateToken("Bearer " + Math.random())}
      />
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
