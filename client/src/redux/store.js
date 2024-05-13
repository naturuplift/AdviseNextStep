import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Your root reducer

export default configureStore({
    reducer: rootReducer
});