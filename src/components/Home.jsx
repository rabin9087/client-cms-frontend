import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../pages/layout/UserLayout";
import Products from "../pages/products/Products";
import { useEffect, useState } from "react";
import CustomeCarosel from "./CustomeCarosel";
import { fetchAllCarouselAction } from "./homePageAction";

const Home = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productInfo);
  const [products, setProducts] = useState(productList);
  const { carouselImage } = useSelector((state) => state.productInfo);

  useEffect(() => {
    dispatch(fetchAllCarouselAction());
    setProducts(productList);
  }, [dispatch, productList]);

  return (
    <UserLayout title={""} products={products} setProducts={setProducts}>
      <div>
        <div className="">
          <CustomeCarosel carouselImage={carouselImage} />
        </div>

        <div className="flex justify-center">
          <Products products={products} />
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;
