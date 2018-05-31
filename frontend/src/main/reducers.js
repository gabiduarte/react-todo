import { combineReducers } from 'redux';
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;

//rootReducer é quem vai concatenar todos os reducers.