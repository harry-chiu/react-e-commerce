import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import formReducer from './formReducer';

export default combineReducers({
    cart: cartReducer,
    form: formReducer,
});