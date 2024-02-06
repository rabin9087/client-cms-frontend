import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const { productList } = useSelector((state) => state.productInfo);
  const [products, setProducts] = useState([]);
  const [currentPage, setPage] = useState(1);
  useEffect(() => {
    setProducts(productList.slice(0, 1));
  }, [productList]);

  useEffect(() => {
    let newArray;

    // if (currentPage === 5) {
    //   newArray = productList.slice(productList.length - 1);
    // } else {
    newArray = productList.slice(currentPage - 1, currentPage);
    // }
    setProducts(newArray);
  }, [productList, currentPage]);
  const numberOfProducts = Array(5).fill("1");
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col gap-5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map(
            ({
              _id,
              description,
              images,
              name,
              price,
              slug,
              thumbnail,
              sku,
            }) => (
              <div key={_id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-900 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={thumbnail}
                    alt={name}
                    className="h-full w-full object-cover  object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={"/"}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{price}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex justify-center">
          <ul className="flex gap-3">
            <li className="border p-3 rounded-lg">Prev</li>
            {numberOfProducts.map((value, index) => {
              return (
                <li
                  key={index}
                  className="border p-3 rounded-lg"
                  onClick={() => {
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </li>
              );
            })}
            <li className="border p-3 rounded-lg">Next</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
