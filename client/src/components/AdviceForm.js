
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAdvice } from '../redux/actions/adviceActions';

function AdviceForm() {
    const [adviceData, setAdviceData] = useState({
        title: '',
        description: '',
        category: '',
        // This should be a valid user ID
        createdBy: '66408841e4bee48c77fc19a3',
        tags: [],
        status: 'active'
    });

    const dispatch = useDispatch();
    const adviceResponse = useSelector(state => state.advice.advice);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createAdvice(adviceData));
    };

    return (
        <div className="AdviceForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={adviceData.title}
                    onChange={e => setAdviceData({...adviceData, title: e.target.value})}
                    placeholder="Enter advice title"
                    required
                />
                <input
                    type="text"
                    value={adviceData.description}
                    onChange={e => setAdviceData({...adviceData, description: e.target.value})}
                    placeholder="Enter advice description"
                    required
                />
                <input
                    type="text"
                    value={adviceData.category}
                    onChange={e => setAdviceData({...adviceData, category: e.target.value})}
                    placeholder="Enter advice category"
                    required
                />
                <button type="submit">Submit Advice</button>
            </form>
            {adviceResponse && (
                <div>
                    <h4>Response:</h4>
                    <pre>{JSON.stringify(adviceResponse, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default AdviceForm;