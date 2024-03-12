import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [setLoading, products]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col justify-start gap-5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Latest Products
        </h2>
        {loading && (
          <div className="spinner justify-center items-center m-auto"></div>
        )}
        {products?.length < 1 && (
          <div className="mt-6 flex w-full justify-center items-center shadow-lg py-10 bg-red-300 rounded-2xl ">
            <h1 className="text-lg font-bold "> No Products found</h1>
          </div>
        )}
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map(({ _id, name, price, thumbnail, slug }) => (
            <div key={_id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full h-48 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80 shadow-lg">
                <Link to={`/product/${slug}`}>
                  {/* <Link to={`#`}> */}
                  <img
                    // src={import.meta.env.VITE_SERVER_ROOT + thumbnail}
                    src={thumbnail}
                    alt={name}
                    className="p-2 object-center w-full h-full lg:h-full lg:w-full "
                  />
                </Link>
              </div>

              <div className="mt-4 justify-between">
                <div>
                  <h3 className="text-lg text-gray-700">
                    {name} <br />
                  </h3>
                </div>
                <p className="text-lg font-bold text-gray-900">$ {price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
