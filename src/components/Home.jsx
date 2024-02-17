import { useSelector } from "react-redux";
import UserLayout from "../pages/layout/UserLayout";
import Products from "../pages/products/Products";
import { useEffect, useState } from "react";


const Home = () => {
  const { productList } = useSelector((state) => state.productInfo);
  const [products, setProducts] = useState(productList);

  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  return (
    <UserLayout title={""} products={products} setProducts={setProducts}>
      <div>
        <h1 className="text-center py-2 text-3xl font-bold">Home Page</h1>
        <div className="flex justify-center">
          <Products products={products} />
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;
