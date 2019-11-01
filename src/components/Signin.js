import React, { useState } from 'react'
import axios from 'axios'

export default function Signin(props) {

  const [error, setError] = useState()
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('http://localhost:8080/signin', data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}

      <input 
        type="email"
        name="email"
        placeholder="email"
        value={data.email}
        onChange={handleChange}
      />
      <input 
        type="password"
        name="password"
        placeholder="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Sign In</button>
    </form>
  )
}
