import { useSelector } from "react-redux";
import SearchProduct from "./SearchProduct";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" mb-3 p-3 pr-10 flex justify-between bg-slate-200">
      <Logo />
      <SearchProduct />
      <Cart />
    </div>
  );
};

const Logo = () => {
  return (
    <Link to="/" className=" text-3xl text-slate-800 font-bold">
      Ecommerce
    </Link>
  );
};

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <Link to="/cart" className="relative">
      <FiShoppingCart
        size={30}
        className="obsolute text-slate-600 font-fold hover:cursor-pointer hover:text-blue-600"
      />

      {items.length > 0 ? (
        <span className="absolute -top-2 -right-1 bg-blue-600 text-white py-0.4 px-2  rounded-full text-sm">
          {items.length}
        </span>
      ) : null}
    </Link>
  );
};

export default Header;
