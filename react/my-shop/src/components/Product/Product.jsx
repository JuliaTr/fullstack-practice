export const Product = ({ title, price = 0 }) => (
  <div className="Product">
    <h2 className="Product__title">{title}</h2>

    <div className="Product__price">Price: {price}</div>
  </div>
);

export default Product;
