import '../styles/resizable.css';
import 'react-resizable/css/styles.css';
import React, { useState } from 'react';
import axios from 'axios';

const ResizableComponent3 = () => {
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  // useEffect(() => {
  //   fetchCount();
  // }, []);

  const fetchCount = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/user/count?email=${emailInput}`);
      setAddCount(response.data.data.addCount);
      setUpdateCount(response.data.data.updateCount);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching counts:', error);
      setLoading(false);
      setError('Error fetching counts. Please try again.');
    }
  };

  const handleEmailSubmit = () => {
    setSubmittedEmail(emailInput);
    setEmailInput('');
    setError(null);
    fetchCount();
  };

  return (
    <div>
      <h1 className='head1'>USER API TRACKER</h1>

      <div className='count'>
        <h2>Counts</h2>
        {loading ? (
          <p>Loading counts...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <>
            <p>Add API Count: {addCount}</p>
            <p>Update API Count: {updateCount}</p>
          </>
        )}
      </div>
      
      <div className='email-section'>
        <h2>Submit Email</h2>
        <label>Email: </label>
        <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
        <button onClick={handleEmailSubmit}>Submit</button>
        {submittedEmail && (
          <p>Email submitted successfully: {submittedEmail}</p>
        )}
      </div>
    </div>
  );
};

export default ResizableComponent3;

