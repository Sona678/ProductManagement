import axios from "axios"
import Navbar from "../../components/Navbar"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function SingleProduct(){
    const {id}=useParams()
    const[product,setProduct]=useState({})
    const navigate=useNavigate()
    const fetchProduct=async()=>{
        const response=await axios.get("https://66deda1cde4426916ee2a457.mockapi.io/products/"+id)
        if(response.status===200){
            setProduct(response.data)
        }
    }
    const deleteMe=async()=>{
        const response=await axios.delete("https://66deda1cde4426916ee2a457.mockapi.io/products/"+id)
        if(response.status===200){
            navigate("/")
        }else{
            alert("Couldn't delete!!")
        }
    }

    useEffect(()=>{
        fetchProduct()
    },[])

   
    return(
        <>
        <Navbar/>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={product.productimage} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                    <Link to={`/edit/${product.id}`}>
                        <button className="w-full bg-gray-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button>
                        </Link>
                    </div>
                    <div className="w-1/2 px-2">
                        <button onClick={deleteMe} className="w-full bg-red-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {product.productdescription}
                </p>
                <div className="flex flex-wrap mb-4"> 
                    <div className="mr-10 mb-2"> 
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                        <span className="text-gray-600 dark:text-gray-300">{product.productprice}</span>
                    </div>
                    <div className="mb-2">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                        <span className="text-gray-600 dark:text-gray-300">{product.productcategory}</span>
                    </div>
                </div>
                <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Branch: </span>
                        <span className="text-gray-600 dark:text-gray-300">{product.producttype}</span>
                    </div>
                
                </div>
             
            </div>
        </div>
    </div>

        </>
    )
}
export default SingleProduct