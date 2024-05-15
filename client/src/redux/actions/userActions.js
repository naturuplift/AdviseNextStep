export const addUser = (userData) => {
    return async (dispatch) => {
        try {
            const response = await fetch('/api/users', {  // Assuming you have a backend route set up for this
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            dispatch({
                type: 'ADD_USER_SUCCESS',
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: 'ADD_USER_FAILURE',
                error: error.toString(),
            });
        }
    };
};