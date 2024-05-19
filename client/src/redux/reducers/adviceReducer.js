
const initialState = {
    advice: null,
    error: null,
    loading: false
};

const adviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ADVICE_SUCCESS':
            return {
                ...state,
                advice: action.payload
            };
        case 'FETCH_ADVICE_FAILURE':
            return {
                ...state,
                error: action.error
            };
        case 'CREATE_ADVICE_SUCCESS':
            return {
                ...state,
                advice: action.payload,
                loading: false
            };
        case 'CREATE_ADVICE_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};

export default adviceReducer;