import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
    <Link to={`/product/${product.id}`}> 

    <div className="mt-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
           <img className="p-6 object-cover rounded-t-lg" src={product.productimage} alt="" />
        
        <div className="p-5">
            
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
           
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.productdescription}</p>
            <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    </Link>
    
  )
}

export default Card