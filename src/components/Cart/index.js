import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
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
                  <button type="button">Checkout</button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
