import React from 'react';
import './wishlist.scss';
import { Table } from 'antd';
import Results from '../../fetchFromAPI/api';
import { MdOutlineCancel } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../Store/productSlice';

const Wishlist = () => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.product.productDetails);

  const handleHeart = (indx) => {
    dispatch(productActions.heartAction({ indx }))
  };


  const columns = [
    {
      title: 'Image',
      key: 'image',
      render: (record) => <div> <img src={record?.images?.[0]?.url} alt="img" style={{ height: '100px', width: '100px' }} /> </div>,
    },
    {
      title: 'Name',
      key: 'name',
      render: (record) => <div className='product-name'> {record?.name} </div>,
    },
    {
      key: 'icon',
      render: (record) => <div onClick={() => handleHeart(record.key - 1)}> <MdOutlineCancel style={{
        height: '20px',
        width: '20px',
        cursor: 'pointer'
      }} />
      </div>,
    },
  ];


  return (
    <div>
      {Results.filter((item) => productDetails[item.key - 1].isFavorite === true).length > 0  ?
        <Table
          columns={columns}
          dataSource={Results.filter((item) => productDetails[item.key - 1].isFavorite === true)}
          pagination={false}
        />
        : 
        <p className='wishlist-heading'>
          THERE IS NOTHING IN YOUR WISHLIST!
        </p>
      }
    </div>

  );
};

export default Wishlist;
