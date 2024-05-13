
export const fetchAdvice = (question) => async (dispatch) => {
    try {
        const response = await fetch('/api/advice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        });
        const data = await response.json();
        dispatch({
            type: 'FETCH_ADVICE_SUCCESS',
            payload: data.advice
        });
    } catch (error) {
        console.error('Failed to fetch advice:', error);
        dispatch({
            type: 'FETCH_ADVICE_FAILURE',
            error: error.toString()
        });
    }
};