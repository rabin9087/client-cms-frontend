import { useState } from "react";
import UserLayout from "../layout/UserLayout";
import { toast } from "react-toastify";
import { createAUser } from "../../helper/userAxios/userAxios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [passwordValidationError, setPasswordValidationError] = useState("");

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setPasswordValidationError("");
    if (name === "password") {
      value.length < 6 &&
        setPasswordValidationError("Must be longer than 6 chars");
      !/[A-Z]/.test(value) &&
        setPasswordValidationError("Must inclue uppercase");

      !/[a-z]/.test(value) &&
        setPasswordValidationError("Must inclue lowercase");

      !/[0-9]/.test(value) && setPasswordValidationError("Must inclue number");
    }

    if (name === "confirmPasword") {
      form.password !== value &&
        setPasswordValidationError("Password does not match");
    }

    setForm({ ...form, [name]: value });
  };
  const handelOnSubmit = async (e) => {
    e.preventDefault();
    console.log("cliecked");
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      toast.error("Password does not match ");
    }

    const pending = createAUser(rest);

    toast.promise(pending, { Processing: "Creating New User" });

    const { status, message } = await pending;
    toast[status](message);
    if (status === "success") {
      return;
    }

    return;
  };

  const inputData = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Enter first name",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Enter Last name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Enter email name",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: true,
      placeholder: "Enter Phone number",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      required: true,
      placeholder: "Enter your address",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "Enter password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "Enter confirm password",
    },
  ];
  return (
    <UserLayout>
      <div className="flex justify-center  mt-6">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-center mb-4 font-bold text-lg">
            Create New Account
          </h3>

          {inputData.map(({ label, name, placeholder, required, type }) => (
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
                onChange={handelOnChange}
              />
            </div>
          ))}

          {passwordValidationError && (
            <div className="text-red-500 font-bold mb-6">
              {passwordValidationError}
            </div>
          )}

          <div className="flex w-60 m-auto  items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handelOnSubmit}
            >
              Sign up
            </button>
          </div>
          <div className="mt-3 text-end pe-2">
            <div className="mb-2">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="#"
              >
                Forgot Password?
              </Link>
            </div>
            Already have an account?{" "}
            <a
              className="inline-block align-baseline font-bold text-sm underline text-blue-500 hover:text-blue-800"
              href="/signIn"
            >
              SignIn
            </a>
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default SignUp;
