import { CustomeInput } from "../../components/CustomeInput";

const Header = () => {
  return (
    <div className="shadow-lg">
      <div className="flex w-100 gap-2 px-4 py-5 items-center bg-red-500">
        <div className="flex gap-2 items-start w-1/2 sm:block">
          <div className="flex justify-start pl-10 ">
            <div>Logo</div>
          </div>
        </div>
        <div className="md:flex justify-end w-full gap-2 inline-block ">
          <div className="md:flex w-full py-1">
            <CustomeInput placeholder={"Search a Product"} />
          </div>
          <div className="flex justify-end">
            <i className="flex justify-center items-center  md:w-full bg-gray-900 hover:bg-slate-600 rounded-xl px-8 py-2 text-white gap-2 border-white border-2 my-1">
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </i>
          </div>
        </div>
        <div className="menubar md:flex justify-around gap-2 w-1/2 font-medium hidden">
          <div className="lg:flex justify-around w-1/3 hidden">
            <div>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-full h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Bag{" "}
              </a>
            </div>
          </div>

          <div className="flex justify-around w-2/3">
            <div>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-full h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
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
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                Sign In/Up{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="menu md:flex justify-around font-medium my-6 pb-6 gap-2 border-b-2 hidden">
        <div>
          <a href=""> Home & Living </a>
        </div>
        <div>
          <a href=""> Women </a>
        </div>
        <div>
          <a href=""> Men </a>
        </div>
        {/* <div>
          <a href=""> Toys </a>
        </div>
        <div>
          <a href=""> Beauty </a>
        </div> */}
        <div>
          <a href=""> Sport & Outdoor </a>
        </div>
        <div>
          <a href=""> Tech </a>
        </div>
        <div>
          <a href=""> Catalogue </a>
        </div>
        <div>
          <a href=""> Trending </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
