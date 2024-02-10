import { useEffect, useState } from "react";
import { fetchAProduct } from "../pages/products/productAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../pages/layout/UserLayout";
import Rating from "./Rating";

const ProductLanding = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { order } = useSelector((state) => state.orderInfo);
  const { orderList } = useSelector((state) => state.orderInfo);
  const { product } = useSelector((state) => state.productInfo);

  const [count, setCount] = useState(1);
  const [newOrder, setNewOrder] = useState(order);
  const [newOrderList, setNewOrderList] = useState(orderList);

  const [newThumbnail, setNewThumbnail] = useState(product?.thumbnail);

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const increment = () => {
    if (count < 20) {
      setCount((prev) => prev + 1);
    }
  };

  const orderItem = () => {
    // setNewOrder(dispatch(SetAOrder(product)));
    setNewOrderList([...orderList, dispatch(setOrderList(product))]);
  };

  useEffect(() => {
    dispatch(fetchAProduct(slug));
  }, [slug, dispatch]);

  return (
    <UserLayout>
      <div className="block md:flex min-h-[73vh] justify-center gap-4 p-12">
        <div className="hidden md:block items-center justify-center md:w-1/5 md:h-1/5 lg:w-1/6 lg:h-1/4 xl:w-1/12 xl:h-1/4">
          {product.images?.map((item, i) => (
            <div key={i} className="flex items-center justify-center my-auto">
              <div
                className="h-2/3 w- 2/3 shadow-lg hover:opacity-75 "
                
              >

                {console.log(newOrderList)}
                <img
                  src={item}
                  alt={product.name}
                  className="p-2 object-center"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="block w-full shadow-lg pb-8">
          <div className="block sm:flex h-5/6">
            <div className="mt-6 grid grid-cols-1 justify-center gap-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8">
              <div className="aspect-h-1 aspect-w-1 w-full ">
                <img
                  src={newThumbnail}
                  alt={product.slug}
                  className="p-2 object-center w-full h-full lg:h-full lg:w-full "
                />
              </div>
              <div className="mt-6 sm:mt-0">
                <div>
                  <h3 className="text-xl text-gray-700 font-bold px-6">
                    {product.name}
                  </h3>
                </div>
                <p className="text-2xl mt-2 text-gray-700 font-bold px-6">
                  $ {product.price}.00
                </p>
                <div className="px-4 my-2">
                  <Rating />
                </div>

                <div className="px-6 font-bold text-gray-700 mt-6 md:text-xl text-sm">
                  <label htmlFor="size" className="block">
                    Size
                  </label>
                  <select className="ml-4 mt-2 font-medium md:text-xl text-sm">
                    <option value="">Select an option</option>
                    <option value="xs">X Small</option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">X Large</option>
                    <option value="2xl">2XL Large</option>
                    <option value="3xl">3X Large</option>
                  </select>
                  <div className="block mt-6 xl:text-xl text-sm">
                    <span className="block">QTY </span>
                    <div className="block lg:flex justify-center w-fit items-center gap-4 ">
                      <div className="justify-center items-center mt-2 border-gray-100 border-2 ">
                        <button
                          onClick={decrement}
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl px-6 py-2.5 me-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                        >
                          -
                        </button>
                        <span className="w-30px">
                          {count < 10 ? 0 : ""}
                          {count}
                        </span>
                        <button
                          onClick={increment}
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl px-6 py-2.5 ms-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-2 lg:text-xl text-white bg-blue-700 hover:bg-green-800 focus:ring-4 font-medium text-sm lg:px-1 px-6 py-2.5 dark:bg-blue-500 dark:hover:bg-green-500 max-w-fit">
                        <button className="lg:mx-10" onClick={orderItem}>
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {count === 20 && (
                      <span className=" inline-block mt-6 text-sm font-normal text-red-500 ">
                        You reached to max number of qty
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile view */}
        <div className="md:hidden flex items-center justify-around gap-4 sm:w-2/3 ">
          {product.images?.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-around group relative "
            >
              <div className="shadow-lg hover:opacity-75">
                <img
                  src={item}
                  alt={product.name}
                  className="p-2 object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default ProductLanding;
