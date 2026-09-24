import cn from "classnames";
import "./Product.scss";

export const Product = ({ title, price = 0 }) => (
  // Conditional styling
  <div
    className={cn("Product", {
      "Product--free": price === 0,
    })}
  >
    <h2
      className="Product__title"
      style={{
        color: price === 0 ? "green" : "red",
        backgroundColor: "yellow",
      }}
    >
      {title}
    </h2>

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
