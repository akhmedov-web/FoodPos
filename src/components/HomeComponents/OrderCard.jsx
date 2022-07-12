import React from 'react';
import OrderImg from './images/image.jpg';

export default function OrderCard() {
  return (
    <>
        <div className="orderCard d-flex text-light pt-2 pb-2" style={{height:"115px",boxSizing:"border-box"}}>
  <div className='d-flex flex-column w-75 h-100'>
    <div className='h-50 w-100 d-flex justify-content-between'>
      <div className="h-100 m-1 d-flex" style={{width:"70%"}}>
        <img src={OrderImg} alt="img" className='orderImg me-3' />
        <div>
            <span>Spicy seasoned seafood</span>
            <p>$ 2.29</p>
        </div>
        </div>
        <button type="button" class="btn btn-secondary me-4" style={{width:"15%"}}>1</button>
    </div>
    <div className='h-50 w-100'>
    <input class="form-control homeOrderInput m-1 bg-secondary" style={{width:"92%"}} type="text" placeholder="Default input" aria-label="default input example"/>
    </div>
  </div>
  <div className='d-flex flex-column justify-content-around w-25 h-100'>
    <h5>$ 4,58</h5>
    <button type="button" class="btn btn-outline-danger me-2 homeOrderBtn w-50"><i class="bi bi-trash"></i></button>
  </div>
</div>
    </>
  )
}
