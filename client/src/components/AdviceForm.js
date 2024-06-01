import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdviceFromOpenAI } from '../redux/actions/adviceActions';
import './AdviceForm.css';

function AdviceForm() {
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();
  const adviceResponse = useSelector(state => state.advice.advice);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchAdviceFromOpenAI(question));
  };

  return (
    <div className="advice-form-container">
      <form onSubmit={handleSubmit} className="advice-form">
        <label htmlFor="question">Ask a Question:</label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Enter your question"
          required
        />
        <button type="submit">Get Advice</button>
      </form>
      {adviceResponse && (
        <div className="advice-response">
          <h4>Advice:</h4>
          <pre>{adviceResponse}</pre>
        </div>
      )}
    </div>
  );
}

export default AdviceForm;