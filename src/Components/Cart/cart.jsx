import React from 'react';
import './cart.scss';
import { ImBin } from 'react-icons/im';
import { cartActions } from '../../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
  const dispatch = useDispatch();
  const cartProductDetails = useSelector((state) => state.cart.cartProductDetails);

  return (
    <>
      <div className='main-container'>
        {cartProductDetails.length === 0
          ? <h1>There is nothing in your cart</h1>
          : cartProductDetails.map((item, indx) => {
            return < div className='cart-wrapper' >   {/* main parent */}

              <div className='image'>
                <img src={item.image} alt="" style={{ height: '80px', width: '80px' }} />
              </div>

              <div className='heading-container'>
                <p className='product-name'>{item.name}</p>
                <p className='product-category'>{item.productSize}</p>
              </div>

              <div className='qty-container'>
                <div onClick={() => dispatch(cartActions.decreaseQuantity({ indx }))} className='decrease-icon'>-</div>
                <div className='number'>{item.quantity}</div>
                <div onClick={() => dispatch(cartActions.increaseQuantity({ indx }))} className='increase-icon'>+</div>
              </div>

              <div className='price'>{item.currency === 'INR' ? `Rs. ${(item.quantity)*(item.price)}` : `$. ${(item.quantity)*(item.price)}`}</div>

              <div className='dustbin-icon' onClick={() => dispatch(cartActions.removeFromCart({ indx }))}><ImBin /></div>

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
