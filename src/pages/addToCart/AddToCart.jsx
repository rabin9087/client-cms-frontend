import { useSelector } from "react-redux";
import UserLayout from "../layout/UserLayout";
import { useEffect, useState } from "react";

const AddToCart = () => {
  const { addToCartList } = useSelector((state) => state.addToCartInfo);

  const newcart = addToCartList.filter((item) => item);
  const [qty, setQty] = useState();
  const decrement = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  useEffect(() => {}, []);
  const increment = () => {
    if (qty) {
      setQty((prev) => prev + 1);
    }
  };

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
              {newcart.map(({ _id, thumbnail, name, qty, price }) => (
                <div key={_id}>
                  {_id !== "" && (
                    <div
                      key={_id}
                      className="flex justify-between p-6 border-b-2"
                    >
                      <div className="flex">
                        <div className="flex justify-center items-center shadow-lg">
                          <img
                            width={"80px"}
                            height={"80px"}
                            src={import.meta.env.VITE_SERVER_ROOT + thumbnail}
                            className="p-2 object-center productLangingImg"
                          />
                        </div>
                        <div className="ps-6 font-medium ">
                          <div className="">{name}</div>
                          <div className="block sm:flex gap-3 mt-4 xl:text-xl text-sm">
                            <span className="block">QTY </span>
                            <div className="block lg:flex justify-center w-fit items-center gap-4 ">
                              <div className="justify-center items-center mt-2 ms:mt-0 border-gray-100 border-2 ">
                                <button
                                  onClick={decrement}
                                  type="button"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl md:px-6 px-2 me-2  md:me-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                                >
                                  -
                                </button>
                                <span className="w-30px">{qty}</span>
                                <button
                                  onClick={increment}
                                  type="button"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl md:px-6 px-2 ms-2  md:ms-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* {qty === product?.qty && (
                      <span className=" inline-block mt-6 text-sm font-normal text-red-500 ">
                        You reached to max number of qty
                      </span>
                    )} */}
                          </div>

                          <div className="font-medium mt-4">
                            Price/Item: ${price}
                          </div>
                        </div>
                      </div>
                      <div className="md:my-10 font-medium md:font-bold md:text-xl text-base text-end md:me-8">
                        <div></div>
                        <div>${price * qty}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="my-5 mx-7 text-end text-base md:text-2xl font-medium md:font-bold">
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
