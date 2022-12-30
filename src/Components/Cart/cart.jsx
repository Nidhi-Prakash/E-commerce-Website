import React from 'react';
import './cart.scss';
import { ImBin } from 'react-icons/im';
import { cartActions } from '../../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
  const dispatch = useDispatch();
  const cartProductDetails = useSelector((state) => state.cart.cartProductDetails);

  const decNum = (itemKey) => {
      dispatch(cartActions.decreaseQuantity({itemKey}));
  }

  const incNum = (itemKey) => {
    dispatch(cartActions.increaseQuantity({itemKey}));
  }

  const removeCartFunction = (selectedProductKey) => {
    dispatch(cartActions.removeFromCart({selectedProductKey}));
  }

  return (
    <>
      <div className='main-container'>
        {cartProductDetails.length === 0
          ? <h1>There is nothing in your cart</h1>
          : cartProductDetails.map((item) => {
            return < div className='cart-wrapper' >   {/* main parent */}

              <div className='image'>
                <img src={item.image} alt="" style={{ height: '80px', width: '80px' }} />
              </div>

              <div className='heading-container'>
                <p className='product-name'>{item.name}</p>
                <p className='product-category'>{item.category}</p>
              </div>

              <div className='qty-container'>
                <div onClick={() => decNum(item.key)} className='decrease-icon'>-</div>
                <div className='number'>{item.quantity}</div>
                <div onClick={() => incNum(item.key)} className='increase-icon'>+</div>
              </div>

              <div className='price'>{item.currency === 'INR' ? `Rs. ${item.price}` : `$. ${item.price}`}</div>

              <div className='dustbin-icon' onClick={() => removeCartFunction(item.key)}><ImBin /></div>

            </div >
          })
        }
      </div>

      <footer>
        <button className='checkout-btn'>Proceed to checkout</button>
      </footer>
    </>

  );
};

export default Cart;
