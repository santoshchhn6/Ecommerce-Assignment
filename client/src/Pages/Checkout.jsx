import { useState } from "react";
import CustomButton from "../Components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Components/Product";
import { resetCheckout } from "../redux/checkoutSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="p-3">
      <h1 className="text-3xl font-medium mb-3 text-center">Checkout</h1>
      <div className="flex p-5 gap-3 flex-wrap">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

const LeftPanel = () => {
  return (
    <div className="w-[600px] mx-auto rounded-lg p-5 border-2 border-slate-500">
      <Address />
      <hr className="my-3" />
      <PaymentMethod />
      <hr className="my-3" />
      <ItemReview />
    </div>
  );
};

const RightPanel = () => {
  const { items } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalProductPrice =
    Math.ceil(
      items.reduce((sum, currentValue) => sum + currentValue.price, 0)
    ) * 83;
  const delivery = 40;
  const totalPrice = totalProductPrice + delivery;
  return (
    <div className="w-[300px] h-[270px] mx-auto rounded-lg p-5 border-2 border-slate-500">
      <h1 className="text-2xl font-bold mb-3">Order Summary</h1>
      <p className="flex justify-between">
        <span>Items:</span>
        <span>Rs. {totalProductPrice}</span>
      </p>
      <p className="my-3 flex justify-between">
        <span>Delivery:</span>
        <span>Rs. {delivery}</span>
      </p>
      <hr className="my-3" />
      <p className="text-xl font-medium text-orange-600 flex justify-between">
        <span>Total:</span>
        <span>Rs. {totalPrice}</span>
      </p>
      <hr className="my-3" />
      <CustomButton
        text="Place Order"
        className="w-full"
        onClick={() => {
          alert("Order Placed");
          dispatch(resetCheckout());
          navigate("/");
        }}
      />
    </div>
  );
};

const Address = () => {
  const [address, setAddress] = useState("Kalyan, Thane, Maharastra");
  return (
    <div className="mb-5">
      <h1 className="text-2xl mb-3">Delivery Address</h1>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="p-1 px-2 border-2 border-slate-500 rounded-md"
      />
    </div>
  );
};

const PaymentMethod = () => {
  const [selectedPaymentMethod, setPaymentMethod] = useState("cash");
  const paymentMethods = [
    {
      title: "Cash on delivery",
      value: "cash",
    },
    {
      title: "Credit or debit card",
      value: "card",
    },
    {
      title: "Net banking",
      value: "netbanking",
    },
  ];
  return (
    <div className="mb-5">
      <h1 className="text-2xl mb-3">Payment method</h1>
      <select
        className="py-2 px-5 rounded-md"
        value={selectedPaymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        {paymentMethods.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

const ItemReview = () => {
  const { items } = useSelector((state) => state.checkout);
  return (
    <div className="mb-5">
      <h1 className="text-2xl mb-3">Review items</h1>
      <div className="flex flex-wrap gap-3 ">
        {items.length ? (
          items.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              rating={product.rating}
            />
          ))
        ) : (
          <h1>No items</h1>
        )}
      </div>
    </div>
  );
};
export default Checkout;
