import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import CustomButton from "../Components/CustomButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToCheckout } from "../redux/checkoutSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex p-5">
      <div className="w-[40%] p-3">
        <img
          src={product?.image}
          alt=""
          className="w-full aspect-square object-contain"
        />
      </div>
      <div className="w-[60%] p-3">
        <h1 className="text-2xl font-medium">{product?.title}</h1>

        <p className="my-3">{product?.description}</p>
        <p className="font-bold text-xl">Rs. {product?.price}</p>
        {/* <p>{product?.category}</p> */}
        <p className="my-3">
          Rating: {product?.rating?.rate} ({product?.rating?.count})
        </p>
        <div>
          <CustomButton
            text="Buy Now"
            className=""
            onClick={() => {
              dispatch(addToCheckout(product));
              navigate("/checkout");
            }}
          />
          <CustomButton
            text="Add to Cart"
            color="blue"
            className="ml-3"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
