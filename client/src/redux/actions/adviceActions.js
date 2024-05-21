
export const fetchAdvice = (question) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3002/api/createAdviceRequest', {
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

export const createAdvice = (adviceData) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3002/api/advice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adviceData)
        });
        const data = await response.json();
        dispatch({
            type: 'CREATE_ADVICE_SUCCESS',
            payload: data
        });
    } catch (error) {
        console.error('Failed to create advice:', error);
        dispatch({
            type: 'CREATE_ADVICE_FAILURE',
            error: error.toString()
        });
    }
};

export const fetchAdviceFromOpenAI = (question) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3002/api/advice/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
      });
      const data = await response.json();
      dispatch({
        type: 'FETCH_ADVICE_SUCCESS',
        payload: data.recommendation
      });
    } catch (error) {
      console.error('Failed to fetch advice:', error);
      dispatch({
        type: 'FETCH_ADVICE_FAILURE',
        error: error.toString()
      });
    }
  };