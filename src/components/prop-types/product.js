import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/default-image.jpg";

const Product = ({ image, name, price }) => {
  console.log(image);
  const url = image && image.url;
  return (
    <div className="product">
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "default name",
  price: 3.19,
  image: defaultImage,
};

export default Product;
