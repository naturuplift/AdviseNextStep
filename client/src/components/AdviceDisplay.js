
import React from 'react';
import { useSelector } from 'react-redux';

function AdviceDisplay() {
    const advice = useSelector(state => state.advice.advice); // Adjust according to your reducer

    return (
        <div className="AdviceDisplay">
            {advice ? (
                <>
                    <p><strong>Title:</strong> {advice.title}</p>
                    <p><strong>Description:</strong> {advice.description}</p>
                    <p><strong>Category:</strong> {advice.category}</p>
                    <p><strong>Status:</strong> {advice.status}</p>
                    <p><strong>Tags:</strong> {advice.tags.join(', ')}</p>
                </>
            ) : (
                <p>No advice to display. Submit a request!</p>
            )}
        </div>
    );
}

export default AdviceDisplay;