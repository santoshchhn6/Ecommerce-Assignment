import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { setFilteredProduct } from "../redux/filteredProductSlice";

const ProductList = () => {
  const { searchTerm } = useSelector((state) => state.search);
  const { products } = useSelector((state) => state.products);
  const { filteredProducts } = useSelector((state) => state.filteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products) dispatch(setFilteredProduct(products));
  }, [products]);

  useEffect(() => {
    if (searchTerm === "") {
      if (products) {
        dispatch(setFilteredProduct(products));
      }
    } else {
      dispatch(
        setFilteredProduct(
          products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-wrap gap-3 ">
      {filteredProducts.map((product) => (
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
      ))}
    </div>
  );
};

export default ProductList;
