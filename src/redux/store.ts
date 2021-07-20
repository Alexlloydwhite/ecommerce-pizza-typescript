import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/_rootReducer';
import logger from 'redux-logger';
import { fetchPizzaSaga } from './sagas/fetchPizza';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(fetchPizzaSaga);