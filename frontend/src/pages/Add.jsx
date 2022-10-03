import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [shoe, setShoe] = useState({
    model: '',
    description: '',
    price: null,
    cover: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setShoe((prev) => ({...prev, [e.target.name]: e.target.value}));
  }
  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/shoes", shoe)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='form'>
      <h2>Add New Shoe</h2>
      <input type="text" placeholder='model' onChange={handleChange} name="model" />
      <input type="text" placeholder='description' onChange={handleChange} name="description" />
      <input type="number" placeholder='price' onChange={handleChange} name="price" />
      <input type="text" placeholder='cover' onChange={handleChange} name="cover" />
      <button onClick={handleClick} >Add</button>
    </div>
  )
}

export default Add