import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const handleForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await axios.get(`https://younglabsbackend-sf8r.onrender.com/api/greet?name=${name}`);
      setMessage(data.message);
      setLoading(false)

    } catch (error) {
      setMessage(error.response.data.error)
      setLoading(false)


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
      <p>{loading ? "Loading..." : message}</p>
    </section>
  )
}

export default App
