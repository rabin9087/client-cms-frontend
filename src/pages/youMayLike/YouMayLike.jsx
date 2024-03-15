import { useEffect } from "react";
import { fetchAllProductForYouMayLikByslugAction } from "../products/productAction";
import { useDispatch, useSelector } from "react-redux";
import Products from "../products/Products";

const YouMayLike = ({ slug }) => {
  const dispatch = useDispatch();

  // const { productsByCatId } = useSelector((state) => state.productInfo);
  const { youMayLikeProductList } = useSelector(
    (state) => state.youMayLikeInfo
  );

  const newYouMayLikeProductList = youMayLikeProductList?.filter(
    (item) => item.slug !== slug
  );
  useEffect(() => {
    dispatch(fetchAllProductForYouMayLikByslugAction(slug));
  }, [dispatch, slug]);

  return (
    <div>
      <h1 className="text-center text-3xl mt-4">You May Also Like</h1>
      <Products products={newYouMayLikeProductList} />;
    </div>
  );
};

export default YouMayLike;
