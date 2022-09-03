import { useSelector } from 'react-redux';
import Recursive from './Recursive';

const Content = () => {
  const { content, error } = useSelector((state) => state);

  return (
    <section className="content">
      <span>{error}</span>
      <Recursive list={content}></Recursive>
    </section>
  );
};

export default Content;
