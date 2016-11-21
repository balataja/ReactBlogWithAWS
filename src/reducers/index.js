import blog from './blog-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    blog
});

export default rootReducer;