import "./Card.scss";

export const Card = (props) => (
  <div className="Card">
    <h2 className="Card__title">{props.title}</h2>
    <div className="Card__details">
      <p>{props.text}</p>
    </div>
  </div>
);

export default Card;
