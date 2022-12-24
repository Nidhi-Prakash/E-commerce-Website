import React, { useState } from 'react';
import './cart.scss';
import { ImBin } from 'react-icons/im';

const Cart = () => {
  const [num, setNum] = useState(1);

  const decNum = () => {
    if (num !== 0) {
      setNum(num - 1)
    }
  };

  return (
    <div className='cart-wrapper'>

      <div className='image'>
        <img src="https://lp2.hm.com/hmgoepprod?set=source[/57/ea/57ead0ed40684fd4b1c477357fe571f77aa19315.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]" alt="" style={{ height: '80px', width: '80px' }} />
      </div>

      <div className='heading-container'>
        <p className='product-name'>Flounced Mini Dress</p>
        <p className='product-category'>Ladies</p>
      </div>

      <div className='qty-container'>
        <div onClick={() => decNum()} className='decrease-icon'>-</div>
        <div className='number'>{num}</div>
        <div onClick={() => setNum(num + 1)} className='increase-icon'>+</div>
      </div>

      <div className='price'>2999.00</div>

      <div className='dustbin-icon'><ImBin /></div>

    </div>
  );
};

export default Cart;
