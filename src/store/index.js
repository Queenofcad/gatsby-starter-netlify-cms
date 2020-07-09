import { createStore } from 'redux';
import rootReducer from './modules/rootReduces';

// const enhancer =
//   process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer);

export default store;