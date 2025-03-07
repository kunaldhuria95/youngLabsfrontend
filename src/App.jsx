import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
   
  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get(`https://younglabsbackend-sf8r.onrender.com/api/greet?name=${name}`);
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response.data.error)
      
    } 
  }

  return (
    <section className='home'>
      <h1>YoungLabs</h1>
      <div className='mainContainer'>
        <form onSubmit={handleForm} className='formContainer'>
          <label htmlFor="myName">Your Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)} value={name} id='myName' />
          <button>Get Greeting.</button>
        </form>
      </div>
      <p>{message}</p>
    </section>
  )
}

export default App
