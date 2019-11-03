import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './RootReducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

//persistor to create a persisted version of store
export const persistor = persistStore(store);

export default { store, persistor };