
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createAdvice(adviceData));
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Example for title, add similar inputs for description, category, etc. */}
            <input
                type="text"
                value={adviceData.title}
                onChange={e => setAdviceData({...adviceData, title: e.target.value})}
                placeholder="Enter advice title"
                required
            />
            <button type="submit">Submit Advice</button>
        </form>
    );
}

// function AdviceForm() {
//     const [question, setQuestion] = useState('');
//     const dispatch = useDispatch();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Assuming fetchAdvice is a thunk action creator
//         dispatch(createAdvice(question));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={question}
//                 onChange={e => setQuestion(e.target.value)}
//                 placeholder="Enter your question"
//                 required
//             />
//             <button type="submit">Get Advice</button>
//         </form>
//     );
// }

export default AdviceForm;