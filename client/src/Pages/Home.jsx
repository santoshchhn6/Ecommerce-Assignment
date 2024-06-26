import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProductList from "../Components/ProductList";
import Siderbar from "../Components/Siderbar";
import useFetch from "../useFetch";
import { useEffect } from "react";
import { setProducts } from "../redux/productSlice";

const Home = () => {
  const { LoggedIn } = useSelector((state) => state.auth);
  const { data } = useFetch("https://fakestoreapi.com/products");
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(setProducts(data));
  }, [data]);

  if (!LoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className=" flex gap-3 px-3">
      <div className=" w-[300px] h-[100vh]">
        <Siderbar />
      </div>

      <ProductList />
    </div>
  );
};
export default Home;
