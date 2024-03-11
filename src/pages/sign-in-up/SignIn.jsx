import UserLayout from "../layout/UserLayout";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { signInUser } from "../../helper/userAxios/userAxios";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAUser } from "./userSlice";
import { fetchUserProfile } from "./userAction";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
const dispatch = useDispatch()
  const navigate = useNavigate();

  const location = useLocation();
  const fromLocation = location.state?.from?.location?.pathname || "/signIn";

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email && !password) {
      return toast.error("Please enter both email and password");
    }
    if (!email) {
      return toast.error("Please enter email");
    }
    if (!password) {
      return toast.error("Please enter password");
    }

    const pending = signInUser({ email, password });

    toast.promise(pending, { processing: "Signing In into your account" });

    const { status, message, jwts } = await pending;
    toast[status](message);
    if (status === "success") {
      const { refreshJWT, accessJWT } = jwts;
      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refreshJWT", refreshJWT);
      fetchUserProfile();
      dispatch(setAUser());
      return navigate("/");
    }
    return;
  };

  useEffect(() => {
    dispatch(fetchUserProfile()) && navigate(fromLocation);
  }, [dispatch, navigate, fromLocation]);

  const input = [
    {
      label: "Email",
      name: "email",
      refer: emailRef,
      required: true,
      placeholder: "Enter email name",
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      refer: passwordRef,
      required: true,
      placeholder: "Enter password",
    },
  ];
  return (
    <UserLayout>
      <div className="flex justify-center mt-6  ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-center mb-4 font-bold text-lg">
            SignIn into Your Account
          </h3>
          <hr />
          {input.map(({ label, name, placeholder, required, type, refer }) => (
            <div className="mb-4" key={name}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                {label}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                ref={refer}
                // onChange={handelOnChange}
              />
            </div>
          ))}

          <div className="flex w-60 m-auto  items-center justify-center">
            <button
              className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handelOnSubmit}
            >
              Sign In
            </button>
          </div>
          <div className="mt-3 text-end pe-2">
            <div className="mb-2">
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            Dont have an account?{" "}
            <Link
              className="inline-block align-baseline font-bold text-sm underline text-blue-500 hover:text-blue-800"
              to="/signup"
            >
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default SignIn;
