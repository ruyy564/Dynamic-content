import Input from './Input';
import useData from '../hooks/useData';

const Menu = () => {
  const { data, changeHandler, changeContent } = useData({
    path: '',
    value: '',
  });

  return (
    <div className="menu">
      <Input
        name={'path'}
        value={data.path}
        onChange={changeHandler}
        label={'Путь'}
      />
      <Input
        name={'value'}
        value={data.value}
        onChange={changeHandler}
        label={'Новое значение'}
      />
      <button className="button-accept" onClick={changeContent}>
        Применить
      </button>
    </div>
  );
};

export default Menu;
