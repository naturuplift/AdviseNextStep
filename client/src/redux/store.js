import { createStore } from 'redux';
import rootReducer from './reducers'; // Your root reducer

const store = createStore(rootReducer);

export default store;