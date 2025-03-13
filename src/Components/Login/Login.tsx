import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    localStorage.setItem("loginDetails", JSON.stringify(loginFormData));
    navigate("/");
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="flex flex-col justify-center h-[50vh]">
      <h1 className="text-2xl font-bold mt-10 text-center">
        Log in to your account
      </h1>
      <div className="flex flex-col gap-5 justify-center items-center mt-10">
        <form
          action=""
          className="flex flex-col w-full items-center gap-5"
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            type="email"
            className="border w-[85%] h-12 pl-4 rounded-lg"
            placeholder="Enter Email"
            autoComplete="off"
            value={loginFormData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            className="border w-[85%] h-12 pl-4 rounded-lg"
            placeholder="Enter Password "
            value={loginFormData.password}
            onChange={handleChange}
          />
          <button className="w-[85%] bg-[#FF8C38] text-white text-lg p-3 rounded-lg">
            Log in
          </button>
        </form>
        <p className="text-lg">
          Don't have an account?
          <span className="text-[#FF8C38] font-bold mx-1">Create one now </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
