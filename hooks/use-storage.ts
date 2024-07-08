import { useState } from "react";

type StorageType = "localStorage" | "sessionStorage";

const useStorage = (storageType: StorageType = "localStorage") => {
  const [storage] = useState(
    storageType === "sessionStorage"
      ? window.sessionStorage
      : window.localStorage
  );

  const getItem = <T>(key: string): T | null => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from ${storageType}:`, error);
      return null;
    }
  };

  const setItem = <T>(key: string, value: T): void => {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item in ${storageType}:`, error);
    }
  };

  const removeItem = (key: string): void => {
    try {
      storage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from ${storageType}:`, error);
    }
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;
