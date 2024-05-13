
import React from 'react';
import { useSelector } from 'react-redux';

function AdviceDisplay() {
    const advice = useSelector(state => state.advice.advice); // Adjust according to your reducer

    return (
        <div>
            {advice ? <p>{advice}</p> : <p>No advice to display. Ask a question!</p>}
        </div>
    );
}

export default AdviceDisplay;