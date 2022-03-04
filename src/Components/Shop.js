import "../Styles/Shop.css";
import uniqid from "uniqid";

const Shop = (props) => {
  return (
    <section id="shop-page">
      {props.shopItems.map((item) => {
        return (
          <Card
            key={item.id}
            cardId={item.id}
            cardDescription={item.description}
            cardPrice={item.price}
            addToCart={props.addToCart}
          />
        );
      })}
    </section>
  );
}

const Card = (props) => {
  let inputId = uniqid();
  return (
    <div id={props.cardId}>
      <img src={require(`${props.cardId}`)} alt="" />
      <div className="card-description-container">
        <p className="card-description">{props.cardDescription}</p>
      </div>
      <p className="card-price">${props.cardPrice}</p>
      <input type="number" min={1} className="quantity" defaultValue={1} id={inputId}/>
      <button className="shop-add" onClick={() => props.addToCart(props.cardId, inputId, props.cardPrice)}>
        Add to cart
      </button>
    </div>
  );
}

export default Shop;
