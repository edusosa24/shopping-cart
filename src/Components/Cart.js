import "../Styles/Cart.css";
import uniqid from "uniqid";


const Cart = (props) => {
  let total = 0;
  for (let i = 0; i < props.cartItems.length; i++) {
    total += props.cartItems[i].quantity * props.cartItems[i].price;
  }

  return (
    <section id="cart-page">
      <div className="cart-items">
        {props.cartItems.map((item) => {
          return (
            <Card
              key={item.id}
              cardId={item.id}
              cardPrice={item.price}
              cardQuantity={item.quantity}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
              removeOneItem={props.removeOneItem}
            />
          );
        })}
      </div>
      <div className="cart-checkout">
        <p>TOTAL: ${total.toFixed(2)}</p>
        <button className="checkout"
          onClick={() => alert("Thank you for your purchase!")}>
          Checkout
        </button>
        <button className="empty-cart"
          onClick={() => props.emptyCart()}>
          Empty cart
        </button>
      </div>
    </section>
  );
}

const Card = (props) => {
  let inputId = uniqid();
  return (
    <div id={props.cardId} className="cart-card">
      <img src={require(`${props.cardId}`)} alt="" />
      <div>
        <p>x{props.cardQuantity}</p>
        <p>${parseFloat(props.cardPrice * props.cardQuantity).toFixed(2)}</p>
        <div className="cart-card-quantity">
          <button onClick={() => props.removeFromCart(props.cardId, inputId)}>-</button>
          <input type="number" min={1} className="quantity" defaultValue={1} id={inputId} />
          <button onClick={() => props.addToCart(props.cardId, inputId, props.cardPrice)}>+</button>
        </div>
        <button onClick={() => props.removeOneItem(props.cardId)}>Remove from cart</button>
      </div>
    </div>
  );
}

export default Cart;
