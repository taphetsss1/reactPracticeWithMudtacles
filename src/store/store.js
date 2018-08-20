import {createStore,applyMiddleware} from 'redux';
import Reducer from './reducer';
import {createLogger} from 'redux-logger';
const middleware = applyMiddleware(createLogger());
export default createStore (
  Reducer,middleware
);
