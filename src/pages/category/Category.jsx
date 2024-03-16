import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserLayout from "../layout/UserLayout";

const Category = () => {
  const { categoryList } = useSelector((state) => state.categoryInfo);
  const { productList } = useSelector((state) => state.productInfo);
  const [tempProduct, setTempProduct] = useState(productList);

  const bats = tempProduct.filter(
    (item) => item.parentCatId === categoryList[0]._id
  );

  const gloves = tempProduct.filter(
    (item) => item.parentCatId === categoryList[1]._id
  );
  const shoes = tempProduct.filter(
    (item) => item.parentCatId === categoryList[2]._id
  );
  const pads = tempProduct.filter(
    (item) => item.parentCatId === categoryList[3]._id
  );
  const cloth = tempProduct.filter(
    (item) => item.parentCatId === categoryList[4]._id
  );
  const ball = tempProduct.filter(
    (item) => item.parentCatId === categoryList[5]._id
  );

  const cat = [
    { category: "Bats", item: bats, url: "/bats" },
    { category: "Protections", item: gloves, url: "/protection" },
    { category: "Cloths", item: shoes, url: "/cloths" },
    { category: "Shoes", item: pads, url: "/shoes" },

    { category: "Balls", item: ball, url: "/balls" },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryList?.length < 1) {
      setLoading(true);
    }
    setTempProduct(productList);
    setLoading(false);
  }, [setLoading, categoryList, productList]);

  return (
    <UserLayout title={""} products={productList} setProducts={setTempProduct}>
      <div>
        <h1 className="text-center py-2 text-3xl font-bold">
          Latest Trending{" "}
        </h1>
        <div className="flex justify-center"></div>
        {tempProduct?.length < 1 && (
          <div className="mt-6 flex justify-center items-center shadow-lg py-10 bg-red-300 rounded-2xl">
            <h1 className="text-lg font-bold"> No Products found</h1>
          </div>
        )}

        {cat.map(({ category, item, url }) => {
          return (
            item?.length > 0 && (
              <div
                className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 flex flex-col justify-start gap-5 border-b-2"
                key={category}
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 hover:underline">
                    <Link to={url}>{category}</Link>
                  </h2>
                  {loading && (
                    <div className="spinner justify-center items-center m-auto"></div>
                  )}

                  <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
                    {item
                      ?.slice(0, 4)
                      .map(({ _id, name, price, thumbnail, slug }) => (
                        <div key={_id} className="group relative">
                          <div className="aspect-h-1 aspect-w-1 w-full h-56 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80 shadow-lg">
                            <Link to={`/product/${slug}`}>
                              {/* <Link to={`#`}> */}
                              <img
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
                            <p className="text-lg font-bold text-gray-900">
                              $ {price}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </UserLayout>
  );
};

export default Category;
