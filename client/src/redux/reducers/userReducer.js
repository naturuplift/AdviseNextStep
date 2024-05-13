
const initialState = {
    loggedIn: false,
    userData: {}
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                loggedIn: true,
                userData: action.payload
            };
        case 'LOG_OUT':
            return {
                ...state,
                loggedIn: false,
                userData: {}
            };
        default:
            return state;
    }
}

export default userReducer;