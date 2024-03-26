import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const items = useSelector((state)=>state.cart);
  const dispatch = useDispatch()

  const removeItem = (productId) =>{
    dispatch(remove(productId))
  }

  return (
    <div className='w-full h-screen bg-gray-300'>
      <h3 className='font-bold text-xl'>Carts</h3>
      <div className='flex flex-col gap-4 justify-center'>
        {
          items.length > 0 ? (
            items.map((item)=>{
              return(
                <div className='w-full h-96 flex p-2 bg-black/20 justify-center items-center gap-10 relative' key={item.id}>
                  <label className="bg-black text-white w-12 h-12 rounded-full absolute right-0 -top-1 flex justify-center items-center text-xl" onClick={()=>removeItem(item.id)}>X</label>
                  <img src={item.image} alt="" className='w-full h-full'/>
                  <div className='flex flex-col gap-6'>
                    <h2 className='font-bold text-2xl'>{item.title}</h2>
                    <span className='p-2 bg-black text-[#ffffff] w-44 text-center'>{item.category}</span>
                    <p>{item.description}</p>
                    <span className='font-medium text-lg'>Price: {item.price}</span>
                  </div>
                </div>
              )
            })
          ) : (<h2 className='flex flex-col gap-4 justify-center items-center text-4xl capitalize w-full h-screen'>0 Items Added <Link className='bg-black text-[#fff] p-2 rounded-md flex items-center justify-center text-lg' to="/">Add Items</Link></h2>)
          
        }
      </div>
    </div>
  )
}

export default Cart
