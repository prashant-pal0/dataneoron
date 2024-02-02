import '../styles/resizable.css';
import 'react-resizable/css/styles.css';
import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const ResizableComponent2 = () => {
  const [updateData, setUpdateData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setNotificationMessage('');
    }, 3000);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5001/user/update`, updateData);
      setUpdateData({});
      setNotificationMessage('Update successful!');
      openModal();
    } catch (error) {
      console.error('Error updating data:', error);
      setNotificationMessage('Error updating data. Please try again.');
      openModal();
    }
  };

  return (
    <div>
      <h1 className='head1'>UPDATE DETAILS</h1>
      <div className='update-section'>
        <h2>Update Data</h2>
        <label>Email to update name: </label>
        <input type="text" value={updateData.email || ''} onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })} />
        <label>Name: </label>
        <input type="text" value={updateData.name || ''} onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} />
        <button onClick={handleUpdate}>Update</button>
      </div>

      {/* Modal for Notifications */}
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="ReactModal__Content">
        <span className="ReactModal__CloseButton" onClick={() => setIsModalOpen(false)}>X</span>
        
        {notificationMessage.includes('successful') ? (
          <span className="success-icon">&#10004;</span>
        ) : (
          <span className="error-icon">&#10060;</span>
        )}
        
        <p className="notification-message">{notificationMessage}</p>
      </Modal>
    </div>
  );
};

export default ResizableComponent2;
