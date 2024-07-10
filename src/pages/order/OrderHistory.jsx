import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrderByUSerIdAction } from "./orderAction";

const OrderHistory = ({ userId }) => {
  const dispatch = useDispatch();
  const { orderHistories } = useSelector((state) => state.orderInfo);
  useEffect(() => {
    dispatch(fetchAllOrderByUSerIdAction(userId));
  }, [dispatch, userId]);
  
  return (
    <div className="m-5 mt-4 ">
      <h3 className="text-center py-4 text-lg font-bold underline">
        Your order History
      </h3>
      
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                S.N.
              </th>
              <th scope="col" className="px-6 py-3">
                Address Details
              </th>
              <th scope="col" className="px-6 py-3">
                Number_Of_Items
              </th>
              <th scope="col" className="px-6 py-3">
                Payment_By
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>

              <th scope="col" className="px-6 py-3">
                Order_Date
              </th>
              <th scope="col" className="px-6 py-3">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody className="">
           
            {[...orderHistories]?.reverse().map(
              ({ _id, address, items, pay, amount, createdAt, deliveryStatus }, i) => (
                <tr
                  key={_id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:opacity-95"
                >
                  <td className="px-6 py-4">{i + 1}.</td>
                  <td className="px-6 py-4">
                    <span>Name: {address?.name}</span> <br />
                    <span>Email: {address?.email}</span> <br />
                    <span>Phone: {address?.phone}</span> <br />
                    <span>
                      Address:
                      {address?.address?.line2
                        ? address?.address?.line2 + "/"
                        : ""}
                      {address?.address?.line1}, <br />
                      {address?.address?.city}, {address?.address?.state}
                      {address?.address?.postal_code},{" "}
                      {address?.address?.country}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4">
                    <img
                      width={"80px"}
                      height={"100px"}
                      src={thumbnail}
                      className="thumbnail p-2 object-center"
                    />
                  </td> */}
                  <td className="px-6 py-4">{items.length}</td>
                  <td className="px-6 py-4">
                    {pay?.payment_method_types
                      ? pay?.payment_method_types
                      : pay}{" "}
                    <br />
                  </td>

                  <td className="px-6 py-4">{amount}</td>
                  <td className="px-6 py-4">
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">{ deliveryStatus}</td>
                </tr>
              )
            )}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 "></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td
                scope="row"
                className="px-6 text-lg py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </td>

              <td
                scope="row"
                className="px-6 text-lg py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                $
                {orderHistories?.items?.reduce((acc, { amount }) => {
                  return acc + amount;
                }, 0)}
              </td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
