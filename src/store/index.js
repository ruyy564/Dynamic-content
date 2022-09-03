import { createStore } from 'redux';
import componentReducer from './reduceres/componentReducer';

const store = createStore(componentReducer);

export default store;
