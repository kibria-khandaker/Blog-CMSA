import { createStore } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const store = createStore(rootReducer, composeWithDevTools());

export default store;