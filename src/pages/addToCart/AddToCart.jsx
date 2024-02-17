import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../layout/UserLayout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { setAddToCartList, setUpdateCartList } from "./addToCartSlice";

const AddToCart = () => {
  const { addToCartList } = useSelector((state) => state.addToCartInfo);
  const dispatch = useDispatch();
  const [newcart, setNewCart] = useState(addToCartList);
  const [newOrderQty, setNewOrderQty] = useState();
  const decrement = () => {
    if (newOrderQty > 1) {
      setNewOrderQty((prev) => prev - 1);
    }
  };

  const increment = () => {
    if (newOrderQty) {
      setNewOrderQty((prev) => prev + 1);
    }
  };

  const handelOnDeleteItem = (i) => {
    if (window.confirm("Are You sure want to delete this item?")) {
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
          <div className="flex mt-10 justify-start text-2xl font-bold">
            {newcart.length} Items in your Cart
          </div>
          <div className="block md:flex  justify-center  w-full mt-6">
            <div className="block md:w-1/2  border-black border-2 mx-0">
              {newcart.map(
                ({ _id, thumbnail, name, orderQty, price, slug }, i) => (
                  <div key={_id}>
                    {_id !== "" && (
                      <div
                        key={_id}
                        className="flex justify-between p-6 border-b-2"
                      >
                        <div className="flex">
                          <Link to={`/product/${slug}`}>
                            <div className="flex justify-center items-center shadow-lg">
                              <img
                                width={"80px"}
                                height={"80px"}
                                src={
                                  import.meta.env.VITE_SERVER_ROOT + thumbnail
                                }
                                className="p-2 object-center"
                              />
                            </div>
                          </Link>
                          <div className="ps-6 font-medium ">
                            <Link to={`/product/${slug}`}>
                              <div className="hover:underline">{name}</div>
                            </Link>
                            <div className="block sm:flex gap-3 mt-2 xl:text-xl text-sm">
                              <span className="block">QTY </span>
                              <div className="block lg:flex justify-center w-fit items-center gap-4 ">
                                <div className="justify-center items-center ms:mt-0 border-gray-100 border-2 ">
                                  <button
                                    onClick={decrement}
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl md:px-6 px-2 me-2  md:me-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                                  >
                                    -
                                  </button>
                                  <span className="w-30px">{orderQty}</span>
                                  <button
                                    onClick={increment}
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl md:px-6 px-2 ms-2  md:ms-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="font-medium mt-4">
                              Price/Item: ${price}
                            </div>
                          </div>
                        </div>
                        <div className="md:my-5 font-medium md:font-bold md:text-xl text-base text-end md:me-8">
                          <div className="">${price * orderQty}</div>
                          <div className="flex justify-center items-center mt-2 text-red-500">
                            <button
                              onClick={() => handelOnDeleteItem(i)}
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
                  {newcart.reduce((acc, { price }) => {
                    return acc + price;
                  }, 0)}
                </div>
              </div>
            </div>
            <div className="text-base md:text-2xl font-medium md:font-bold md:w-1/2 ms-7">
              <div>Payment Method</div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </UserLayout>
  );
};

export default AddToCart;
