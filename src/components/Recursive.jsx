import Label from './Label';
import Button from './Button';
import Panel from './Panel';
import { BUTTON, LABEL, PANEL } from '../helpers/constants';

const Recursive = ({ list }) => {
  return (
    <>
      {list?.map((item) => {
        switch (item.type) {
          case PANEL:
            if (Array.isArray(item?.content)) {
              return (
                <Panel props={item.props}>
                  <Recursive list={item.content} />
                </Panel>
              );
            }
            return <Panel props={item.props} />;
          case LABEL:
            return <Label props={item.props} />;
          case BUTTON:
            return <Button props={item.props} />;
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default Recursive;
