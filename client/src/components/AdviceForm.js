
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdvice } from '../redux/actions/adviceActions';

function AdviceForm() {
    const [question, setQuestion] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchAdvice(question)); // Assuming fetchAdvice is a thunk action creator
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="Enter your question"
                required
            />
            <button type="submit">Get Advice</button>
        </form>
    );
}

export default AdviceForm;
