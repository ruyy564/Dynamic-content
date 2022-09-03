import { cloneDeep, addbyString } from '../../helpers/objectMethods';
import { initState } from '../../helpers/initState';
import { ADD_VALUE, ADD_VALUE_ERROR } from '../../helpers/constants';

const componentReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      const obj = cloneDeep(state.content);

      addbyString(obj, action.payload.path, action.payload.value);

      return { content: obj, error: null };
    case ADD_VALUE_ERROR:
      return { content: [...state.content], error: action.payload };
    default:
      return state;
  }
};

export default componentReducer;
