import { configureStore } from '@reduxjs/toolkit';
import reducer from '../app/rootReducer';
import sagaMiddleware, { startSaga } from '../app/rootSaga';

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
startSaga();

export type AppDispatch = typeof store.dispatch;

export default store;
