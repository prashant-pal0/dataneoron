// import '../styles/resizable.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';


// const ResizableComponent1 = () => {
//   const [data, setData] = useState([]);
//   const [newData, setNewData] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5001/user/detail');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAdd = async () => {
//     try {
//       await axios.post('http://localhost:5001/user/add', newData);
//       setNewData({});
//       setNotificationMessage('Data added successfully!');
//       openModal();

//       // Refresh data after successful addition
//       fetchData();
//     } catch (error) {
//       console.error('Error adding data:', error);
//       setNotificationMessage('Error adding data. Please try again.');
//       openModal();
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//     setTimeout(() => {
//       setIsModalOpen(false);
//     }, 3000);
//   };

//   return (
//     <div className='add-details-container'>
//       <h1 className='head1'>ADD DETAILS</h1>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className='addContainer'>
//         <h2>Add Data</h2>
//         <label>Name: </label>
//         <input type='text' value={newData.name || ''} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
//         <label>Email: </label>
//         <input type='text' value={newData.email || ''} onChange={(e) => setNewData({ ...newData, email: e.target.value })} />
//         <button onClick={handleAdd}>Add</button>
//       </div>

//       {/* Modal for Notifications */}
//       <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="ReactModal__Content">
//         <span className="ReactModal__CloseButton" onClick={() => setIsModalOpen(false)}>X</span>
//         <p className="notification-message">{notificationMessage}</p>
//       </Modal>
//     </div>
//   );
// };

// export default ResizableComponent1;


import '../styles/resizable.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const ResizableComponent1 = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/user/detail');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:5001/user/add', newData);
      setNewData({});
      setNotificationMessage('Data added successfully!');
      openModal();

      // Refresh data after successful addition
      fetchData();
    } catch (error) {
      console.error('Error adding data:', error);
      setNotificationMessage('Error adding data. Please try again.');
      openModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className='add-details-container'>
      <h1 className='head1'>ADD DETAILS</h1>

      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='addContainer'>
        <h2>Add Data</h2>
        <label>Name: </label>
        <input type='text' value={newData.name || ''} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
        <label>Email: </label>
        <input type='text' value={newData.email || ''} onChange={(e) => setNewData({ ...newData, email: e.target.value })} />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Modal for Notifications */}
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="ReactModal__Content">
        <span className="ReactModal__CloseButton" onClick={() => setIsModalOpen(false)}>X</span>
        <p className="notification-message">{notificationMessage}</p>
      </Modal>
    </div>
  );
};

export default ResizableComponent1;



