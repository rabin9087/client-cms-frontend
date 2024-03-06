
const OrderItems = () => {

  // const { order } = useSelector((state) => state.orderInfo);
  const orders = JSON.parse(localStorage.getItem("orders"));

  const { address, items } = orders;
 
  return (
    <div className="m-5 mt-4 ">
      <h3 className="text-center py-4 text-lg font-bold underline">
        Your order Details
      </h3>
      <div className="p-2 border-2 w-fit">
        <h3 className="text-lg font-bold text-center">Address Details </h3>
        <span>Name: {address?.name}</span> <br />
        <span>Email: {address?.email}</span> <br />
        <span>Phone: {address?.phone}</span>
        <br />
        <div>
          Address:{" "}
          {address?.address?.line2 ? address?.address?.line2 + "/" : ""}
          {address?.address?.line1}, {address?.address?.city},{" "}
          {address?.address?.state} {address?.address?.postal_code},{" "}
          {address?.address?.country}
        </div>
      </div>
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                S.N.
              </th>
              <th scope="col" className="px-6 py-3">
                thumbnail
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                size
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Sub Total
              </th>
            </tr>
          </thead>
          <tbody className="">
            {items?.map(
              ({ _id, thumbnail, name, orderQty, price, size }, i) => (
                <tr
                  key={_id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:opacity-95"
                >
                  <td className="px-6 py-4">{i + 1}.</td>
                  <td className="px-6 py-4">
                    <img
                      width={"80px"}
                      height={"100px"}
                      src={import.meta.env.VITE_SERVER_ROOT + thumbnail}
                      className="thumbnail p-2 object-center"
                    />
                  </td>
                  <td className="px-6 py-4">Order sent</td>
                  <td className="px-6 py-4">
                    {name} <br />
                  </td>
                  <td className="px-6 py-4">{size}</td>
                  <td className="px-6 py-4">{price}</td>
                  <td className="px-6 py-4">{orderQty}</td>
                  <td className="px-6 py-4">{price * orderQty}</td>
                </tr>
              )
            )}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                {items.reduce((acc, { price, orderQty }) => {
                  return acc + price * orderQty;
                }, 0)}
              </td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderItems;
