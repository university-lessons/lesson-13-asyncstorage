import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

export default function useToken() {
  const [token, setToken] = useState<string | null>(null);

  const readToken = async () => {
    const token = await AsyncStorage.getItem("token");
    setToken(token);
  };

  const updateToken = async (newToken: string) => {
    await AsyncStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const clearToken = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    readToken();
  }, []);

  return {
    token,
    updateToken,
    clearToken,
  };
}
