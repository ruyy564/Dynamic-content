import { useState } from 'react';
import useActions from '../hooks/useActions';
import {
  normalizeValue,
  validatePath,
  isObject,
  normalizeObj,
  isString,
} from '../helpers/stringMethods';
import { ERROR } from '../helpers/constants';

const useData = (init) => {
  const [data, setDate] = useState(init);
  const { addValue, addValueError } = useActions();

  const changeHandler = (event) => {
    setDate((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const clearData = () => {
    setDate({ path: '', value: '' });
  };

  const changeContent = () => {
    let value = normalizeValue(data.value);

    if (!validatePath(data.path)) {
      addValueError(ERROR);

      return;
    }

    if (isObject(value)) {
      value = normalizeObj(value);
    } else if (isString(value)) {
      addValue({ path: data.path, value });

      return;
    }

    try {
      value = JSON.parse(value);
      addValue({ path: data.path, value });
    } catch (e) {
      addValueError(ERROR);
    }

    clearData();
  };

  return { data, changeHandler, changeContent };
};

export default useData;
