import React, { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import axios from 'axios'

const Home = () => {
    const[products,setProducts]=useState([])
    const fetchProducts=async()=>{
        const response=await axios.get('https://66deda1cde4426916ee2a457.mockapi.io/products')
    if(response.status===200){
        setProducts(response.data)
    }
}
    useEffect(()=>{
        fetchProducts()
    },[]) 
    console.log(products)
    
  return (
    <>
<Navbar/>
<div className='flex flex-wrap space-x-5 mt-4 ml-2 '>
    {
        products.map((product)=>{
            return(
                <Card product={product}/>
            )
        })
    }
</div>
    </>
  )
}


export default Home