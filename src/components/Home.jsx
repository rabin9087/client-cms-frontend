import Category from "../pages/category/Category";
import UserLayout from "../pages/layout/UserLayout";
import Products from "../pages/products/Products";

const Home = () => {
  return (
    <UserLayout title={""}>
      <div className="">
        <h1 className="text-center py-2 text-3xl font-bold">Home Page</h1>
        <div className="grid grid-row-1 grid-flow-col border-blue-300 border-2 bg-sky-700 p-20">
          <div className="col-span-1 bg-amber-400 border-r-gray-600 border-2">
            <Category />
          </div>
          {/* <div className="col-span-3">
            <Products />
          </div> */}
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;
