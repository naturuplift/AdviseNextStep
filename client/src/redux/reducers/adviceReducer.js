
const initialState = {
    advice: '',
    error: null
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
        default:
            return state;
    }
};

export default adviceReducer;