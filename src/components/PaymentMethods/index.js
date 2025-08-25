import {useState} from 'react'
import './index.css'

const PaymentMethod = props => {
  const {noOfItems, totalPrice, onClickBookOrder} = props
  const [selectedPayment, setSelectedPayment] = useState('')

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Select your mode of payment</h2>
      <div className="payment-details-container">
        <p>No of Items: {noOfItems}</p>
        <p>Total Price: {totalPrice}</p>
      </div>
      <ul className="payment-method-list">
        <li>
          <label>
            <input
              type="radio"
              name="paymentMethods"
              value="card"
              disabled="true"
              onClick={e => setSelectedPayment(e.target.value)}
            />
            Card
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="paymentMethods"
              value="netBanking"
              disabled="true"
              onClick={e => setSelectedPayment(e.target.value)}
            />
            Net Banking
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="paymentMethods"
              value="upi"
              disabled="true"
              onClick={e => setSelectedPayment(e.target.value)}
            />
            UPI
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="paymentMethods"
              value="wallet"
              disabled="true"
              onClick={e => setSelectedPayment(e.target.value)}
            />
            Wallet
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="paymentMethods"
              value="cashOnDelivery"
              onClick={e => setSelectedPayment(e.target.value)}
            />
            Cash on Delivery
          </label>
        </li>
      </ul>
      <div className="payment-btn-container">
        <button
          type="button"
          className="payment-method-btn"
          disabled={selectedPayment !== 'cashOnDelivery'}
          onClick={() => onClickBookOrder()}
        >
          Confirm Order
        </button>
      </div>
    </div>
  )
}
export default PaymentMethod
