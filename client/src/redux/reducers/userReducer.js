
const initialState = {
    users: [],
    error: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER_SUCCESS':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case 'ADD_USER_FAILURE':
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export default userReducer;