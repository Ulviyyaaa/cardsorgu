import React from 'react'
import Navbar from '../../Components/Navbar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function AddProductPage() {
    let {id} = useParams();
    const [product, setproduct] = useState({});
    useEffect(() => [
        fetch("https://fakestoreapi.com/products" + id)
        .then((response) => response.json())
        .then((data) => setproduct(data))
    ])
  return (
    <div>
        <Navbar/>
        AddProductPage
        
    </div>
  )
}

export default AddProductPage