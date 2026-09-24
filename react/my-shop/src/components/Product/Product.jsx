import "./Product.scss";

export const Product = ({ title, price = 0 }) => (
  <div className="Product">
    <h2 className="Product__title">{title}</h2>

    <div className="Product__price">
      {/* Interpolation with JS */}
      {`Price: ${price} `}

      {/* Conditional rendering */}
      {/* If `price === 0` is `true`, print `**`. Full evaluation */}
      {price === 0 && (
        <>
          <span>*</span>
          <span>*</span>
        </>
      )}
    </div>
  </div>
);

export default Product;
