import { useEffect, useState } from "react";
import { fetchAProduct } from "../pages/products/productAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../pages/layout/UserLayout";
import Rating from "./Rating";
import { setAddToCartList } from "../pages/addToCart/addToCartSlice";
import YouMayLike from "../pages/youMayLike/YouMayLike";

const ProductLanding = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [thumbNailImage, setThumbnailImage] = useState();
  const [current, setCurrent] = useState(true);
  const { addToCartList } = useSelector((state) => state.addToCartInfo);
  localStorage.setItem("addToCartList", JSON.stringify(addToCartList));

  const { product } = useSelector((state) => state.productInfo);
  const { carouselImage } = useSelector((state) => state.productInfo);

  const [size, SetSize] = useState("");
  const [count, setCount] = useState(1);
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
      if (size != "") {
        const updateProduct = { ...product, orderQty: count, size };
        dispatch(setAddToCartList(updateProduct));
      } else {
        alert("Please select size");
      }
    }
  };

  useEffect(() => {
    dispatch(fetchAProduct(slug));
    // setCats(addToCartList);
  }, [slug, dispatch, addToCartList]);

  return (
    <UserLayout>
      <div className="block md:grid-cols-2 md:grid-rows-2 min-h-[73vh] justify-center gap-4 p-4">
        <div className="block lg:flex gap-4">
          <div className="w-full lg:w-1/2 block lg:flex ">
            <div
              className={`hidden mb-2 lg:grid grid-rows-${carouselImage?.length} gap-4 justify-center items-center  lg:h-full rounded-md  lg:w-48 w-full  overflow-auto shadow-lg group-hover:opacity-75`}
            >
              {carouselImage?.map((item, i) => (
                <button key={i} onClick={() => setThumbnailImage(item)}>
                  <img
                    src={item}
                    alt={product.name}
                    className="object-center  md:w-44 md:h-44 w-20 h-20 p-2 hover:opacity-75 bg-gray-200 rounded-md"
                  />
                </button>
              ))}
            </div>

            <div className="flex bg-white h-72 md:h-full w-full justify-center items-center relative">
              <div className="flex ">
                <img
                  src={
                    thumbNailImage !== undefined
                      ? thumbNailImage
                      : product.thumbnail
                  }
                  alt={product.slug}
                  className="productLangingImg p-2 object-center h-60 md:w-full md:h-full"
                />
              </div>
            </div>
            <div
              className={`flex lg:hidden mb-2 grid-rows-${carouselImage?.length} gap-4 justify-center items-center  lg:h-full rounded-md  lg:w-48 w-full  overflow-auto shadow-lg group-hover:opacity-75`}
            >
              {carouselImage?.map((item, i) => (
                <button key={i} onClick={() => setThumbnailImage(item)}>
                  <img
                    src={item}
                    alt={product.name}
                    className="object-center  md:w-44 md:h-44 w-20 h-20 p-2 hover:opacity-75 bg-gray-200 rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="block mt-6 w-full lg:w-1/2 sm:mt-6 ">
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
                className="w-2/3 md:w-1/2 xlg:w-1/4 py-2 px-2.5 rounded-md mt-2 font-medium md:text-xl text-sm"
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
                  <div className="flex text-center justify-between items-center mt-2 border-gray-100 border-2 box-content w-36 md:w-48 ">
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
                  <div className="w-full  mt-4 mb-2 text-center lg:text-xl text-white bg-blue-700 hover:bg-green-800 focus:ring-4 font-medium text-sm lg:px-1 px-4 py-1.5 sm:py-2.5 dark:bg-blue-500 dark:hover:bg-green-500">
                    <button
                      className="lg:mx-2 text-center"
                      onClick={itemAddToCart}
                    >
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

        <div className="block w-full shadow-lg pb-8">
          <span className="block py-2 text-xl font-medium">
            Product Details{" "}
          </span>

          <div className="flex w-full md:w-1/3 justify-around md:justify-normal items-center rounded-sm mx-auto  bg-gray-200">
            <button
              className={current ? "bg-white w-1/2 m-2" : "w-1/2 m-2"}
              onClick={() => setCurrent(true)}
            >
              Description
            </button>
            <button
              className={!current ? "bg-white w-1/2 m-2" : "w-1/2 m-2"}
              onClick={() => setCurrent(false)}
            >
              Reviews
            </button>
          </div>
          <div className="text-justify mx-3 mt-2">
            {/* <span className="block text-2xl font-bold">Description </span> */}
            {current && product.description}
            {(!current && product?.review) || <div>Here is review</div>}
          </div>
        </div>
      </div>
      <div className="">
        <YouMayLike slug={slug} />
      </div>
    </UserLayout>
  );
};

export default ProductLanding;
