import { useState } from 'react';
import Input from './Input';
import useActions from '../hooks/useActions';
import {
  normalizeValue,
  validatePath,
  isObject,
  normalizeObj,
  isString,
} from '../helpers/object';

const Menu = () => {
  const [data, setDate] = useState({ path: '', value: '' });
  const { addValue, addValueError } = useActions();

  const changeHandler = (event) => {
    setDate((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onClickHandler = () => {
    let value = normalizeValue(data.value);

    if (!validatePath(data.path)) {
      addValueError('Ошибка:Введены некорректные данные');

      return;
    }

    if (isObject(value)) {
      value = normalizeObj(value);
      console.log(value);
    } else if (isString(value)) {
      addValue({ path: data.path, value });

      return;
    }

    try {
      value = JSON.parse(value);
      addValue({ path: data.path, value });
    } catch (e) {
      addValueError('Ошибка:Введены некорректные данные');
    }
  };

  return (
    <div className="menu">
      <Input
        name={'path'}
        value={data.path}
        onChange={changeHandler}
        label={'Новое значение'}
      />
      <Input
        name={'value'}
        value={data.value}
        onChange={changeHandler}
        label={'Путь'}
      />
      <button className="button-accept" onClick={onClickHandler}>
        Применить
      </button>
    </div>
  );
};

export default Menu;
