import { DeepClone, initState, SearchbyString } from '../../helpers/object';

const componentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      const obj = DeepClone(state.content);

      SearchbyString(obj, action.payload.path, action.payload.value);

      return { content: obj, error: null };
    case 'ADD_VALUE_ERROR':
      return { content: [...state.content], error: action.payload };
    default:
      return state;
  }
};

export default componentReducer;
