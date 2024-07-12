import React from "react";
import { useForm } from "react-hook-form";
import { LoginType } from "../../Lib/authType";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/authActions";
const LoginLayout: React.FC = () => {
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<LoginType>();
  const onSubmit = async (data: LoginType) => {
    const response = await login(data);
    if (response.success) {
      navigate("/home");
    } else {
      setError(response.message);
      console.log(response.message);
    }
  };
  return (
    <div className="mx-auto flex flex-col gap-5 rounded-xl bg-gray-200 p-5">
      <header className="text-center text-2xl">Login</header>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-lg">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            {...register("username")}
            defaultValue={"testuser"}
            className="rounded-lg p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            {...register("password")}
            defaultValue={"secret"}
            className="rounded-lg p-2 focus:outline-none"
          />
        </div>
        <button className="rounded-lg bg-black px-3 py-2 text-white">
          Login
        </button>
        {error && <p className="text-center text-red-500">{error}</p>}
      </form>
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/auth/signup" className="underline">
          Signup
        </Link>
      </div>
    </div>
  );
};
export default LoginLayout;
