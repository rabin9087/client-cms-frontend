import { useEffect, useState } from "react";
import { CustomeInput } from "../../components/CustomeInput";
import { useSelector } from "react-redux";

const Header = ({ products, setProducts }) => {
  const [tempProduct, setTempProduct] = useState(products);
  const [cartNumber, setCartNumber] = useState(0);

  const { orderList } = useSelector((state) => state.orderInfo);

  const handelOnSearch = (e) => {
    const { value } = e.target;

    let matchProduct = [];
    matchProduct = tempProduct.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(matchProduct);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="shadow-lg w-full  ">
        <div className="flex w-full gap-2 p-7 justify-between items-center bg-blue-400">
          {/* mobile menu */}
          <div className="xl:hidden">
            <div className="menu">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  color="white"
                  className="text-white"
                >
                  <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"></path>
                </svg>
              </span>
            </div>

            <div className="hidden gap-5 w-full h-screen bg-blue-400">
              <span className="block bg-blue-400 p-2 text-white hover:bg-blue-800/40  w-40 text-lg text-start ">
                <a href=""> Home </a>
              </span>
              <span className="block bg-blue-400 p-2 text-white hover:bg-blue-800/40 w-40 text-lg text-start ">
                <a href=""> Bats </a>
              </span>
              <span className="block bg-blue-400 p-2 text-white hover:bg-blue-800/40 w-40 text-lg text-start ">
                <a href=""> Shoes </a>
              </span>

              <span className="block bg-blue-400 p-2 text-white hover:bg-blue-800/40 w-40 text-lg text-start ">
                <a href=""> Gloves </a>
              </span>
              <span className="block bg-blue-400 p-2 text-white hover:bg-blue-800/40 w-40 text-lg text-start ">
                <a href=""> Pads </a>
              </span>
              <span className="block bg-blue-400 p-2 text-white hover:bg-blue-800/40 w-40 text-lg text-start ">
                <a href=""> Catalogue </a>
              </span>
              <span className="block bg-blue-400 p-2 text-white hover:bg-blue-800/40 w-40 text-lg text-start ">
                <a href=""> Trending </a>
              </span>
            </div>
          </div>
          <div className="w-56 sm:block">
            <span className="text-4xl font-bold">logo</span>
          </div>
          {/* categories */}
          <div className="hidden xl:flex w-full gap-5 font-semibold  justify-between">
            <span className="bg-white/25 p-2 rounded-md text-white hover:bg-blue-800/40  w-24 text-lg text-center ">
              <a href=""> Home </a>
            </span>
            <span className="bg-white/25 p-2 rounded-md text-white hover:bg-blue-800/40 w-24 text-lg text-center ">
              <a href=""> Bats </a>
            </span>
            <span className="bg-white/25 p-2 rounded-md text-white hover:bg-blue-800/40 w-24 text-lg text-center ">
              <a href=""> Shoes </a>
            </span>

            <span className="bg-white/25 p-2 rounded-md text-white hover:bg-blue-800/40 w-24 text-lg text-center ">
              <a href=""> Gloves </a>
            </span>
            <span className="bg-white/25 p-2 rounded-md text-white hover:bg-blue-800/40 w-24 text-lg text-center ">
              <a href=""> Pads </a>
            </span>
            <span className="bg-white/25 p-2 rounded-md text-white hover:bg-blue-800/40 w-24 text-lg text-center ">
              <a href=""> Catalogue </a>
            </span>
            <span className="bg-white/25 p-2 rounded-md text-white hover:bg-blue-800/40 w-24 text-lg text-center ">
              <a href=""> Trending </a>
            </span>
          </div>
          {/* search */}
          <div className="hidden sm:flex justify-end w-5/12 gap-2">
            <div className="w-5/6">
              <CustomeInput
                placeholder={"Search a Product"}
                products={products}
                setProducts={setProducts}
                handelOnSearch={handelOnSearch}
              />
            </div>
          </div>

          {/* icons */}
          <div className=" flex justify-around gap-2 sm:w-1/5 w-2/4 font-medium ">
            <div >
              <a href="">
                <div className="flex relative"> 
               
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-full h-8"
                    color="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span className="text-md shadow-lg rounded-full px-3 bg-red-500 p-1">{orderList?.length}</span>
                </div>
                Cart{" "}
              </a>
            </div>
            <div>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-full h-8"
                  color="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* mobile search bar */}
      <div className="block mt-4 sm:hidden w-full px-4  ">
        <div className="w-full ">
          <CustomeInput
            placeholder={"Search a Product"}
            products={products}
            setProducts={setProducts}
            handelOnSearch={handelOnSearch}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
