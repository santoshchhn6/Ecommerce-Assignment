import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProductList from "./ProductList";
import Header from "./Header";
import Siderbar from "./Siderbar";
import useFetch from "./useFetch";
import { useEffect } from "react";
import { setProducts } from "./redux/productSlice";

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
    <div className="px-3">
      <Header />
      <div className=" flex gap-3">
        <div className=" w-[300px] h-[100vh]">
          <Siderbar />
        </div>

        <ProductList />
      </div>
    </div>
  );
};
export default Home;
