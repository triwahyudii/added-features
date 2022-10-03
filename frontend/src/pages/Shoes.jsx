import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Shoes = () => {
  const [shoes, setShoes] = useState([])

  useEffect (() => {
    const fecthAllShoes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/shoes")
        setShoes (res.data);
        console.log(res);
        
      } catch (error) {
        console.log(error);
      }
    }
    fecthAllShoes();
  })
  return (
    <div>
      <h1>Shoes Store</h1>
      <div className='shoes'>
        {shoes.map((shoe) => (
          <div className='shoe' key={shoe.id}>
            {shoe.cover && <img src={shoe.cover} alt='' />}
            <h2>{shoe.model}</h2>
            <p>{shoe.description}</p>
            <span>{shoe.price}</span>
            <button className='delete'>Delete</button>
            <button className='update'>Update</button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add" > Add New Shoe</Link>
      </button>
    </div>
  )
}

export default Shoes