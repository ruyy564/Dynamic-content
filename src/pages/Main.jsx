import Menu from '../components/Menu';
import Content from '../components/Content';

const Main = () => {
  return (
    <div className="app">
      <div className="container">
        <Menu />
        <Content />
      </div>
    </div>
  );
};

export default Main;
