import React,{ useEffect, useState } from 'react'
import Loading from "./Loading"
import { useDispatch, useSelector } from 'react-redux';
import {add} from "../store/cartSlice"
import { STATUSES, fetchProducts } from '../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();

  // renaming the data to products
  const {data:products,status} = useSelector((state)=>state.product)

  useEffect(()=>{
    dispatch(fetchProducts())

    //This is Without productSlice file creation
    // const fetchProducts = async() =>{
    //   await fetch('https://fakestoreapi.com/products')
    // .then(res=>res.json())
    // .then(data=> setProducts(data))
    // }

    // fetchProducts()
  },[])

  const handleAdd= (product)=>{
    dispatch(add(product))
  }

  if(status === STATUSES.LOADING) return <Loading/>

  return (
    <div className='w-full flex justify-center flex-wrap gap-5'>
      {
        products.map(product=>{
          return(
            <div key={product.id} className='w-1/5 h-80 flex flex-col justify-center items-center p-3 rounded-lg gap-2 shadow-sm shadow-slate-600'>
              <img src={product.image} className="w-24 h-24 rounded mt-3 flex justify-start items-start" />
              <h2 className='font-semibold text-blue-950'>{product.title}</h2>
              <div className='w-full items-center flex justify-between'>
              <label>Price: {product.price}</label>
              </div>
              <button onClick={()=>handleAdd(product)} className='mt-4 bg-green-950 text-white p-2 flex justify-end items-end'>Add to Cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products