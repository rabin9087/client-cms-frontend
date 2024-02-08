import { useEffect } from "react";
import { fetchAProduct } from "../pages/products/productAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../pages/layout/UserLayout";

const ProductLanding = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productInfo);
  console.log(product);
  console.log(slug);
  useEffect(() => {
    dispatch(fetchAProduct(slug));
  }, [slug, dispatch]);

  return (
    <UserLayout>
      <div className="block md:flex min-h-[73vh] bg-white justify-center border-2 border-red-500 m-4">
        <div className="hidden lg:block items-center justify-start md:w-1/5 md:h-1/4 lg:w-1/6 lg:h-1/4 xl:w-1/12 xl:h-1/4 border-2 border-red-500">
          {product.images?.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center mt-16 my-auto group relative border-2 border-red-500"
            >
              <div className="h-1/2 w-1/2 shadow-lg">
                <img
                  src={item}
                  alt={product.name}
                  className="p-2 object-center border-2 border-red-50"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="block w-full pl-20">
          <div className="block sm:flex border-2 border-green-500 h-full">
            <div className="mt-6 grid grid-cols-1 justify-center gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 border-2 border-yellow-500">
              <div className="aspect-h-1 aspect-w-1 w-full border-blue-500 border-2">
                <img
                  src={product.thumbnail}
                  alt={product.slug}
                  className="p-2 object-center w-full h-full lg:h-full lg:w-full "
                />
              </div>
              <div className="border-red-500 border-2">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
          {/* mobile view */}
          <div className="lg:hidden flex items-center justify-start md:w-1/5 md:h-1/4 lg:w-1/6 lg:h-1/4 xl:w-1/12 xl:h-1/4 border-2 border-red-500">
            {product.images?.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-auto group relative border-2 border-red-500"
              >
                <div className="h-1/2 w-1/2 shadow-lg">
                  <img
                    src={item}
                    alt={product.name}
                    className="p-2 object-center border-2 border-red-50"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default ProductLanding;
