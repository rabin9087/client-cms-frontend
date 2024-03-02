import { useSelector } from "react-redux";
import UserLayout from "../layout/UserLayout";
import OrderItems from "./OrderItems";

const Orders = () => {
  const { order } = useSelector((state) => state.orderInfo);
  const items = localStorage.getItem("orders");
  console.log(JSON.parse(items));
  console.log(order);
  return (
    <UserLayout>
      <OrderItems order={order} />
    </UserLayout>
  );
};

export default Orders;
