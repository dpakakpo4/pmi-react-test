import { useState, useEffect } from 'react';
import { IProduct } from '../store/store-types';

const useLocalStorage = (key: string, initialValue: []): [IProduct[], React.Dispatch<React.SetStateAction<IProduct[]>>] => {
  const [value, setValue] = useState<IProduct[]>(() => {
    try {
      const localValue = window?.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;