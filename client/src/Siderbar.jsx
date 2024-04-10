import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProduct } from "./redux/filteredProductSlice";

const Siderbar = () => {
  return (
    <div className=" border-2 px-8 py-2 border-slate-500 rounded-md">
      <Catergory />
      <Price />
    </div>
  );
};

const Catergory = () => {
  const { data } = useFetch("https://fakestoreapi.com/products/categories");
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products) dispatch(setFilteredProduct(products));
  }, [products]);

  useEffect(() => {
    if (selectedCategory === "") {
      if (products) {
        dispatch(setFilteredProduct(products));
      }
    } else {
      dispatch(
        setFilteredProduct(
          products.filter((product) => product.category === selectedCategory)
        )
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);
  return (
    <div>
      <h3 className="text-lg font-bold">Category</h3>
      <ul className="list-disc">
        {categories.map((catergory, index) => (
          <li
            key={index}
            onClick={() => setSelectedCategory(catergory)}
            className="hover:text-slate-600 cursor-pointer"
          >
            {catergory.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Price = () => {
  const [price, setPrice] = useState(10);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products) dispatch(setFilteredProduct(products));
  }, [products]);

  useEffect(() => {
    if (price === 0) {
      if (products) {
        dispatch(setFilteredProduct(products));
      }
    } else {
      dispatch(
        setFilteredProduct(products.filter((product) => product.price > price))
      );
    }
  }, [price]);
  return (
    <div className="mt-5">
      <h3 className="text-lg font-bold">Price</h3>
      <span className="font-medium">Start from</span>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-14 ml-3 border border-slate-500 px-2 py-1 rounded-lg text-center"
      />
      <input
        type="range"
        min={0}
        max={100}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
};

export default Siderbar;
