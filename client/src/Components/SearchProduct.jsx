import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";

const SearchProduct = () => {
  const { searchTerm } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      placeholder="Search Product"
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      className="border-2 border-slate-500 outline-none rounded-md px-2 py-1 mx-3"
    />
  );
};

export default SearchProduct;
