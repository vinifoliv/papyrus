import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export const useStorage = () => {
  const getItem = useCallback(async (key: string): Promise<any | null> => {
    try {
      const json = await AsyncStorage.getItem(key);
      if (!json) return null;
      return JSON.parse(json);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const storeItem = useCallback(async (key: string, item: any) => {
    try {
      const json = JSON.stringify(item);
      await AsyncStorage.setItem(key, json);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { getItem, storeItem };
};
