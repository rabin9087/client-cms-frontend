import { useSelector } from "react-redux";
import UserLayout from "../layout/UserLayout";
import OrderHistory from "./OrderHistory";
import OrderItems from "./OrderItems";

const Orders = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <UserLayout>
      <OrderItems />
      {user?._id && <OrderHistory userId={user?._id} />}
    </UserLayout>
  );
};

export default Orders;
