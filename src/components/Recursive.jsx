import Label from './Label';
import Button from './Button';
import Panel from './Panel';

const Recursive = ({ list }) => {
  return (
    <>
      {list?.map((item) => {
        switch (item.type) {
          case 'panel':
            if (Array.isArray(item?.content)) {
              return (
                <Panel props={item.props}>
                  <Recursive list={item.content} />
                </Panel>
              );
            }
            return <Panel props={item.props} />;
          case 'label':
            return <Label props={item.props} />;
          case 'button':
            return <Button props={item.props} />;
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default Recursive;
