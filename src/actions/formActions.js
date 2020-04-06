import { formConstants } from '../constants';

const { SET_FORM } = formConstants;

const setForm = (fieldName, value) => {
    return {
        type: SET_FORM,
        payload: {
            fieldName,
            value,
        },
    };
};

export default {
    setForm,
};