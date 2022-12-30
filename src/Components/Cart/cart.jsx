import React, { Fragment, useState } from 'react';
import './cart.scss';
import { ImBin } from 'react-icons/im';
import { cartActions } from '../../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Results from '../../fetchFromAPI/api';


const Cart = () => {
  const [num, setNum] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  const decNum = () => {
    if (num !== 0) {
      setNum(num - 1)
    }
  };

  const removeCartFunction = (selectedProduct) => {
    var product;
    Results.map((item) => {
      if (item.key === selectedProduct.key) {
        product = item;
      }
    });

    dispatch(cartActions.removeFromCart({ product, selectedProduct }));
  };

  return (
    <>
      <div className='main-container'>
        {productDetails.length === 0
          ? <h1 className='cart-heading'>There is nothing in your cart</h1>
          : productDetails.map((item) => {
            return < div className='cart-wrapper' >

              <div className='image'>
                <img src={item.image} alt="" style={{ height: '80px', width: '80px' }} />
              </div>

              <div className='heading-container'>
                <p className='product-name'>{item.name}</p>
                <p className='product-category'>{item.category}</p>
              </div>

              <div className='qty-container'>
                <div onClick={() => decNum()} className='decrease-icon'>-</div>
                <div className='number'>{num}</div>
                <div onClick={() => setNum(num + 1)} className='increase-icon'>+</div>
              </div>

              <div className='price'>{item.currency === 'INR' ? `Rs. ${item.price}` : `$. ${item.price}`}</div>

              <div className='dustbin-icon' onClick={() => removeCartFunction(item)}><ImBin /></div>

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
