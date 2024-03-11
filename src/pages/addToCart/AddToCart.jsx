import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../layout/UserLayout";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { setUpdateCartList, setUpdateItemOfCart } from "./addToCartSlice";

const AddToCart = () => {
  const { addToCartList } = useSelector((state) => state.addToCartInfo);
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newcart, setNewCart] = useState(addToCartList);

  const decrement = (orderQty, i) => {
    const newOrderQty = orderQty - 1;
    if (newOrderQty > 0) {
      dispatch(setUpdateItemOfCart({ i, newOrderQty }));
    }
  };

  const increment = (qty, orderQty, i) => {
    const newOrderQty = orderQty + 1;
    if (qty === orderQty) {
      alert("You have reached the maximum number of items available");
    }
    if (newOrderQty <= qty) {
      dispatch(setUpdateItemOfCart({ i, newOrderQty }));
    }
  };
  const handelOnDeleteItem = (i, name) => {
    if (window.confirm(`Are You sure want to remove ${name} from cart?`)) {
      return setNewCart(dispatch(setUpdateCartList(i)));
    }
  };

  useEffect(() => {
    setNewCart(addToCartList);
  }, [addToCartList]);

  return (
    <UserLayout>
      {newcart.length === 0 && (
        <div className="mt-6 flex justify-center items-start shadow-lg py-10 rounded-2xl">
          <h1 className="text-lg font-bold"> You dont have any item in cart</h1>
        </div>
      )}
      {newcart.length > 0 && (
        <div className="m-7">
          <div className="flex mt-10 justify-center text-2xl font-medium">
            {newcart.reduce((acc, { orderQty }) => {
              return acc + orderQty;
            }, 0)}{" "}
            Items in your Cart
          </div>
          <div className="block md:flex  justify-center  w-full mt-6">
            <div className="block md:w-1/2  border-black border-2 mx-0 h-fit">
              {newcart.map(
                (
                  { _id, thumbnail, name, orderQty, price, slug, qty, size },
                  i
                ) => (
                  <div key={_id}>
                    {_id !== "" && (
                      <div
                        key={_id}
                        className=" flex gap-2 items-center px-2 py-3 md:p-6 border-b-2"
                      >
                        <div className="w-3/4 flex gap-2 items-center">
                          <Link to={`/product/${slug}`}>
                            <div className="flex justify-center items-center shadow-lg border-2 w-16 h-24 md:w-24 md:h-32">
                              <img
                                width={"80px"}
                                height={"100px"}
                                src={
                                  import.meta.env.VITE_SERVER_ROOT + thumbnail
                                }
                                className="p-2 object-center"
                              />
                            </div>
                          </Link>
                          <div className="ps-6 font-medium ">
                            <div className="flex">
                              <Link to={`/product/${slug}`}>
                                <div className="hover:underline font-bold text-base">
                                  {name}
                                </div>
                              </Link>
                            </div>
                            <div className="block sm:flex gap-3 mt-2 xl:text-xl text-sm">
                              <span className="block">QTY </span>
                              <div className="block lg:flex justify-center w-fit items-center gap-4 ">
                                <div className="justify-center items-center ms:mt-0 border-gray-100 border-2 ">
                                  <button
                                    onClick={() => decrement(orderQty, i)}
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl md:px-6 px-2 me-2  md:me-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                                  >
                                    -
                                  </button>
                                  <span className="w-30px">{orderQty}</span>
                                  <button
                                    onClick={() => increment(qty, orderQty, i)}
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl md:px-6 px-2 ms-2  md:ms-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="blcok md:flex justify-between items-center mt-2 overflow-auto">
                              <div className="font-medium ">${price}</div>
                              <div className="">Size: {size}</div>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/4 flex-col md:my-5 font-medium md:font-bold md:text-xl text-base text-end md:me-8">
                          <div className="">${price * orderQty}</div>
                          <div className="mt-2 text-red-500">
                            <button
                              onClick={() => handelOnDeleteItem(i, name)}
                              className="p-2 rounded-full hover:bg-gray-500/10"
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
              <div className=" flex justify-between my-5 mx-7 text-end text-base md:text-2xl font-medium md:font-bold">
                <div>Total Amount</div>

                <div>
                  $
                  {newcart.reduce((acc, { price, orderQty }) => {
                    return acc + price * orderQty;
                  }, 0)}
                </div>
              </div>
            </div>
          </div>
          {user?._id ? (
            <div className="flex justify-center gap-4 w-full">
              <div className="mt-4 mb-2 rounded-lg lg:text-xl text-white bg-blue-700 hover:bg-green-800 focus:ring-4 font-medium text-sm lg:px-2 px-4 py-1.5 sm:py-2.5 dark:bg-blue-500 dark:hover:bg-green-500 max-w-fit">
                <button onClick={() => navigate("/payment")}>
                  Check Out Now
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center gap-4 w-full">
              <div className="mt-4 mb-2 rounded-lg lg:text-xl text-white bg-blue-700 hover:bg-green-800 focus:ring-4 font-medium text-sm lg:px-1 px-4 py-1.5 sm:py-2.5 dark:bg-blue-500 dark:hover:bg-green-500 max-w-fit">
                <button onClick={() => navigate("/payment")}>
                  Continue as Guest
                </button>
              </div>
              <div className="mt-4 rounded-lg mb-2 lg:text-xl text-white bg-blue-700 hover:bg-green-800 focus:ring-4 font-medium text-sm lg:px-1 px-4 py-1.5 sm:py-2.5 dark:bg-blue-500 dark:hover:bg-green-500 max-w-fit">
                <button onClick={() => navigate("/login")}>Login</button>
              </div>
            </div>
          )}
        </div>
      )}
    </UserLayout>
  );
};

export default AddToCart;
