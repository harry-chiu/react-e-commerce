import { formConstants } from '../constants';

const { SET_FORM } = formConstants;

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM:
            return { ...state, [action.payload.fieldName]: action.payload.value };
        default:
            return state;
    }
};