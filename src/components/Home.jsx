import Category from "../pages/category/Category";
import UserLayout from "../pages/layout/UserLayout";
import Products from "../pages/products/Products";

const Home = () => {
  return (
    <UserLayout title={"Home"}>
      <div className="">
        <h1 className="text-center py-2 text-3xl font-bold">Home Page</h1>
        <div className="border-blue-300 border-2">
          <Category />
          <Products />
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;
