import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllProductForYouMayLikByslugAction } from "../products/productAction";
import { useDispatch, useSelector } from "react-redux";
import Products from "../products/Products";

const YouMayLike = ({ slug }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // const { productsByCatId } = useSelector((state) => state.productInfo);
  const { youMayLikeProductList } = useSelector(
    (state) => state.youMayLikeInfo
  );
  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllProductForYouMayLikByslugAction(slug));
    setLoading(false);
  }, [dispatch, slug]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className="text-center text-3xl mt-4">You May Also Like</h1>
      <Products products={youMayLikeProductList} />;
    </div>
  );
};

export default YouMayLike;
