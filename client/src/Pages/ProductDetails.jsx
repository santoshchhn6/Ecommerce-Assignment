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
    <div className="flex flex-wrap gap-3 p-5">
      <div className="w-[400px] border-2 border-slate-400 rounded-lg p-5">
        <img
          src={product?.image}
          alt=""
          className="w-full aspect-square object-contain"
        />
      </div>
      <div className="w-[500px]  border-2 border-slate-400 rounded-lg p-5">
        <h1 className="text-2xl font-medium">{product?.title}</h1>

        <p className="my-3 text-lg">{product?.description}</p>
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
              alert("Added to cart");
              dispatch(addToCart(product));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
