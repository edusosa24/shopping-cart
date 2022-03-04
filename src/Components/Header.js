import { Link } from "react-router-dom";
import "../Styles/Header.css"

const Header = (props) => {
  return (
    <header className="header-title">
      <Link to="/">
        <h1>
          YGO Card Shop
        </h1>
      </Link>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <div className="cart-btn">
            <p>{props.itemsOnCart}</p>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;