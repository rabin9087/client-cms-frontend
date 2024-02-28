import { useEffect, useState } from "react";
import { fetchAProduct } from "../pages/products/productAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../pages/layout/UserLayout";
import Rating from "./Rating";
import { setAddToCartList } from "../pages/addToCart/addToCartSlice";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

const ProductLanding = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [thumbNailImage, setThumbnailImage] = useState();
  const { addToCartList } = useSelector((state) => state.addToCartInfo);

  const { product } = useSelector((state) => state.productInfo);
  const [carts, setCats] = useState(addToCartList);
  const [count, setCount] = useState(1);
  const [size, SetSize] = useState("");
  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const increment = () => {
    if (count < product?.qty) {
      setCount((prev) => prev + 1);
    }
  };

  const handelOnSize = (e) => {
    const { value } = e.target;
    if (value != "") {
      SetSize(value);
    }
  };

  const itemAddToCart = () => {
    if (count > 0 && count < product?.qty) {
      const {
        status,
        description,
        images,
        createdAt,
        updatedAt,
        __v,
        ...rest
      } = product;
      if (size != "") {
        const updateProduct = { ...rest, orderQty: count, size };

        dispatch(setAddToCartList(updateProduct));
      } else {
        alert("Please select size");
      }
    }
  };

  const handelonSlide = (i) => {
    if (product?.length) {
      product?.image.map((item) => {
        for (let i = 0; i <= product?.image.length; i++) {
          setThumbnailImage(thumbNailImage.push(item(i)));
        }
      });
      setThumbnailImage([i]);
    }
  };

  useEffect(() => {
    dispatch(fetchAProduct(slug));
    setCats(addToCartList);
  }, [slug, dispatch, addToCartList]);

  return (
    <UserLayout>
      <div className="block md:flex min-h-[73vh] justify-center gap-4 p-6">
        <div className="hidden md:grid grid-rows-3 gap-1 h-96 w-40 ">
          {product.images?.map((item, i) => (
            <div
              key={i}
              className="flex justify-center w-full h-28 rounded-md group-hover:opacity-75 hover:opacity-75 shadow-lg"
            >
              <button onClick={() => setThumbnailImage(item)}>
                <img
                  src={import.meta.env.VITE_SERVER_ROOT + item}
                  alt={product.name}
                  className="p-2 object-center w-20 h-28"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="block w-full  shadow-lg pb-8 ">
          <div className="block lg:flex h-full">
            <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8 bg-gray-100 shadow-lg lg:w-2/3">
              <div className="flex bg-white h-full w-full justify-center items-center">
                <div className="sm:hidden">
                  <button className="px-2" onClick={(i) => handelonSlide(i--)}>
                    <FaLessThan />
                  </button>
                </div>
                <div className="aspect-h-1 aspect-w-1 w-4/5 h-4/5 rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80 shadow-lg ">
                  <img
                    src={
                      thumbNailImage !== undefined
                        ? import.meta.env.VITE_SERVER_ROOT + thumbNailImage
                        : import.meta.env.VITE_SERVER_ROOT + product.thumbnail
                    }
                    alt={product.slug}
                    className="productLangingImg p-2 object-center w-full h-full lg:h-full lg:w-full"
                  />
                </div>
                <div className="sm:hidden">
                  <button className="px-2" onClick={(i) => handelonSlide(i++)}>
                    <FaGreaterThan />
                  </button>
                </div>
              </div>
              <div className="mt-6 sm:mt-0">
                <div>
                  <h3 className="text-xl text-gray-700 font-bold px-6">
                    {product.name}
                  </h3>
                </div>
                <p className="text-2xl mt-2 text-gray-700 font-bold px-6">
                  $ {product.price}.00
                </p>
                <div className="px-4 my-2">
                  <Rating />
                </div>

                <div className="px-6 font-bold text-gray-700 mt-6 md:text-xl text-sm">
                  <label htmlFor="size" className="block">
                    Size
                  </label>
                  <select
                    className="py-1 px-2.5 rounded-md mt-2 font-medium md:text-xl text-sm"
                    value={size}
                    onChange={handelOnSize}
                  >
                    <option className="py-2" value="">
                      Select an option
                    </option>

                    {product.sizes?.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="block mt-6 xl:text-xl text-sm">
                    <span className="block">QTY </span>
                    <div className="block 2xl:flex justify-center w-full items-center gap-4 ">
                      <div className="flex text-center items-center mt-2 border-gray-100 border-2 box-content w-1/2">
                        <button
                          onClick={decrement}
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl px-4 py-1.5  sm:px-6 sm:py-2.5 me-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                        >
                          -
                        </button>
                        <span className="">{count}</span>
                        <button
                          onClick={increment}
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-xl px-4 py-1.5  sm:px-6 sm:py-2.5 ms-6 dark:bg-gray-600/35 dark:hover:bg-blue-700"
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-4 mb-2 lg:text-xl text-white bg-blue-700 hover:bg-green-800 focus:ring-4 font-medium text-sm lg:px-1 px-4 py-1.5 sm:py-2.5 dark:bg-blue-500 dark:hover:bg-green-500 max-w-fit">
                        <button className="lg:mx-2" onClick={itemAddToCart}>
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {count === product?.qty && (
                      <span className=" inline-block mt-6 text-sm font-normal text-red-500 ">
                        You reached to max number of qty
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mx-6 mt-3 text-justify md:text-xl">
              Description: {product.description}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default ProductLanding;
