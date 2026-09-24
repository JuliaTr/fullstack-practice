import "./Card.scss";

export const Card = ({ title, text, price = 0 }) => (
  <div className="Card">
    <h2 className="Card__title">{title}</h2>
    <div className="Card__details">
      <p>{text}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  </div>
);

export default Card;
