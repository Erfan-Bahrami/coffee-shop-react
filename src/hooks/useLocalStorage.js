import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = (value) => {
    setState((prev) => {
      const newValue =
        value instanceof Function ? value(prev) : value;

      localStorage.setItem(key, JSON.stringify(newValue));

      return newValue;
    });
  };

  return [state, setValue];
};

export default useLocalStorage;