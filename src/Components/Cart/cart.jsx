import React, { useState } from 'react';
import './cart.scss';
import { ImBin } from 'react-icons/im';
import Results from '../../fetchFromAPI/api';


const Cart = () => {
  const [num, setNum] = useState(1);
  const [apiData, setApiData] = useState(Results);

  const decNum = () => {
    if (num !== 0) {
      setNum(num - 1)
    }
  };

  const removeCartFunction = (key) => {
    apiData.map((item) => {
      if (item.key === key) {
        item.addedToCart = false;
      }
    })
  };

  return (
    <div>
      {
        apiData.map((item) => {
          if (item.addedToCart === true) {
            return < div className='cart-wrapper' >

              <div className='image'>
                <img src={item?.images?.[0]?.url} alt="" style={{ height: '80px', width: '80px' }} />
              </div>

              <div className='heading-container'>
                <p className='product-name'>{item?.name}</p>
                <p className='product-category'>{item?.categoryName}</p>
              </div>

              <div className='qty-container'>
                <div onClick={() => decNum()} className='decrease-icon'>-</div>
                <div className='number'>{num}</div>
                <div onClick={() => setNum(num + 1)} className='increase-icon'>+</div>
              </div>

              <div className='price'>{item?.price?.value}</div>

              <div className='dustbin-icon' onClick={() => removeCartFunction(item.key)}><ImBin /></div>

            </div >
          }
        })
      }
    </div>
  );
};

export default Cart;
