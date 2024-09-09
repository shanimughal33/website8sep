import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';
import PrimaryButton from './Shared/PrimaryButton';
import { Link } from 'react-router-dom';
const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
    
    return (
        <div className={`fixed right-0 top-0 z-50  shadow-2xl w-96 h-auto grid grid-rows-[60px_1fr_60px] 
            transform transition-transform duration-500 bg-white
            ${statusTab === false ? "translate-x-full" : ""}`}>
            <h2 className='p-5 text-2xl text-black'>Shopping Cart</h2>
            <div className='p-5'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item} />
                )}
            </div>
            <div className='grid items-center grid-cols-2 p-5'>
  <button className='px-6 py-2 font-semibold text-black bg-transparent' onClick={handleCloseTabCart}>CLOSE</button>
  
  <Link to="/Checkout">  {/* Use Link here to wrap the button */}
    <button className='px-6 py-2 font-semibold text-black transparent'>CHECKOUT</button> 
  </Link>
</div>


        </div>
    );
}

export default CartTab;
