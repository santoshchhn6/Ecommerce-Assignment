import SearchProduct from "./SearchProduct";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className=" my-3 p-3 flex justify-between">
      <Logo />
      <SearchProduct />
      <FiShoppingCart
        size={24}
        className="text-slate-600 font-fold hover:cursor-pointer hover:text-blue-600"
      />
    </div>
  );
};

const Logo = () => {
  return <span className=" text-3xl text-slate-800 font-bold">Ecommerce</span>;
};

export default Header;
