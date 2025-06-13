import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'


const Dashboard = () => {

  const [cards, setCards] = useState(true)

  useEffect(() => {

    console.log('Fetching Data...')
    const fetchingDataCards = async () => {
      try {
        console.log('------------------------Axios Response-------------------------------')
        const response = await axios.get('http://localhost:5000/card_slider_data')

        console.log('Fetching Received: ', response.status )
        console.log('Response: ', response)

        setCards(response.data); // Update state with the fetched data

        

        console.log('-------------------Data Fetching Complete--------------------------')
      } catch(err) {
        console.log('-----------Error Fetching Data----------')
        if (err.response) {
          console.error('Error Fetching', err.response)
        }
        console.error(err)
      }
    }
    fetchingDataCards()
  }, [])


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token on logout
    navigate('/login'); // Redirect back to login
  };

  return (
    <section className='h-screen'>
      <div className='h-20 flex flex-col items-center justify-center bg-gray-100'>
        <h1 className='text-3xl'>Welcome to the Dashboard!</h1>
      </div>

      {/* <div className=''>
        {cards.map((item) => (
          <p>
            {item.description}
          </p>
        ))}
      </div> */}

    </section>
  );
};

export default Dashboard;