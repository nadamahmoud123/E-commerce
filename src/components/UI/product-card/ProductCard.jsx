import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/product-card.css";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    // Replace this with your actual user ID retrieval logic
    const userId = getUserId();

    // Get the user-specific cart from localStorage
    const userCart =
      JSON.parse(localStorage.getItem(`userCart_${userId}`)) || [];

    // Add the item to the user's cart
    const updatedCart = [...userCart, { id, title, image01, price }];

    // Update the user's cart in localStorage
    localStorage.setItem(`userCart_${userId}`, JSON.stringify(updatedCart));

    // Dispatch the item to the global cart state (if needed)
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  const getUserId = () => {
    // Replace this with your actual user ID retrieval logic
    // For now, we'll use a placeholder value
    return "user123";
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
