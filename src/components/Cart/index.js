import Popup from 'reactjs-popup'
import {useState} from 'react'
import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import PaymentMethod from '../PaymentMethods'
import SuccessMessage from '../SuccessMessage'

import './index.css'

const Cart = () => {
  const [orderBooked, setOrderBooked] = useState(false)

  const bookOrder = () => {
    setOrderBooked(true)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList, removeAllCartItems} = value
        console.log(cartList)
        const showEmptyView = cartList.length === 0
        // TODO: Update the functionality to remove all the items in the cart

        const getTotalPrice = () =>
          cartList.reduce(
            (accum, currentItem) =>
              accum + currentItem.price * currentItem.quantity,
            0,
          )

        return (
          <>
            <Header />
            <div className="cart-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    onClick={removeAllCartItems}
                    className="remove-all-btn"
                  >
                    Remove All
                  </button>
                  <CartListView />
                  <div className="summary-container">
                    <h1>Order Total: {getTotalPrice()}</h1>
                    <p>{`${cartList.length} Items in cart`}</p>
                    <Popup
                      trigger={open => (
                        <button type="button" className="checkout-btn">
                          Checkout
                        </button>
                      )}
                      position="top center"
                      closeOnDocumentClick
                    >
                      <div className="popup-container">
                        {orderBooked ? (
                          <SuccessMessage />
                        ) : (
                          <PaymentMethod
                            noOfItems={cartList.length}
                            totalPrice={getTotalPrice()}
                            onClickBookOrder={bookOrder}
                          />
                        )}
                      </div>
                    </Popup>
                  </div>
                </div>
              )}
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}
export default Cart
