import React from 'react';
import OrderCard from './OrderCard';
export default function HomeRightBlock() {
  return (
    <div className="homeRightBlock d-xl-block d-none p-4 text-light">
      <div>
        <h4 className='mb-2'>Orders #34562</h4>
        <button type="button" class="btn btn-outline-danger me-2 homeOrderBtn">Dine in</button>
        <button type="button" class="btn btn-outline-danger m-2 homeOrderBtn">To Go</button>
        <button type="button" class="btn btn-outline-danger m-2 homeOrderBtn">Delivery</button>
      </div>
      <div className='d-flex justify-content-between mt-3'>
        <h5>Item</h5>
        <div className='d-flex'>
        <h5 className='me-3'>Qty</h5>
        <h5>Price</h5>
        </div>
      </div>
      <div className='orderList mt-3'>
<OrderCard/>
<OrderCard/>
<OrderCard/>
<OrderCard/>
<OrderCard/>
<OrderCard/>
<OrderCard/>
      </div>
      <table className='w-100 orderAmountList mt-2'>
        <tbody>
        <tr>
          <td className='orderAmount'>Discount</td>
          <td className='text-end'>$0</td>
        </tr>
        <tr>
          <td className='orderAmount'>Sub total</td>
          <td className='text-end'> $ 21,03</td>
        </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-danger w-100 mt-2 PaymentBtn">Continue to Payment</button>
    </div>
  )
}
