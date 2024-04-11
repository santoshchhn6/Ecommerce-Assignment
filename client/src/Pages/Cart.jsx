import { useDispatch, useSelector } from "react-redux";
import Product from "../Components/Product";
import CustomButton from "../Components/CustomButton";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { addManyCheckout, addToCheckout } from "../redux/checkoutSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-3 ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-medium mb-3">Your Cart</h1>
        {items.length ? (
          <CustomButton
            text="Buy All"
            onClick={() => {
              dispatch(addManyCheckout(items));
              navigate("/checkout");
            }}
          />
        ) : null}
      </div>

      <div className="flex flex-wrap gap-3 ">
        {items.length ? (
          items.map((product) => (
            <div key={product.id} className=" flex flex-col gap-3 ">
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />
              <div className="flex gap-3">
                <CustomButton
                  text="Remove"
                  className="flex-1 bg-red-600 hover:bg-red-500"
                  onClick={() => {
                    alert("Item added to Cart");
                    dispatch(removeFromCart(product.id));
                  }}
                />
                <CustomButton
                  text="Buy"
                  className="flex-1"
                  onClick={() => {
                    dispatch(addToCheckout(product));
                    navigate("/checkout");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <h1>No items</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
