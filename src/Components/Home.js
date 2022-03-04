import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <section id="home-page">
      <h2>What is Yu-Gi-Oh!?</h2>
      <div className="container">
        <div className="home-text">
          <p>
            &nbsp;The Yu-Gi-Oh! Trading Card Game is a Japanese collectible card battle game
            developed and published by Konami. Based on the Duel Monsters concept from
            the original manga series, the game sees players using a combination of monsters,
            spells, and traps to defeat their opponent.
          </p>
          <p>
            &nbsp;This is a store specifically made for those who want rare cards to improve their decks.
          </p>
          <Link to="/shop">
            <button className="shop-now">Shop now!</button>
          </Link>
        </div>
        <img src={require('../images/Kuriboh.png')} alt="Kuriboh" className="home-image"/>
      </div>

    </section>
  );
}

export default Home;
