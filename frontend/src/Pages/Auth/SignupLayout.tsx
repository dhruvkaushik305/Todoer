import React from "react";
import { useForm } from "react-hook-form";
import { SignupType } from "../../Lib/authType";
import { signup } from "../../actions/authActions";
import { Link, useNavigate } from "react-router-dom";
const SignupLayout: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState<string | null>(null);
  const { handleSubmit, register } = useForm<SignupType>();
  const onSubmit = async (data: SignupType) => {
    const response = await signup(data);
    if (response.success) {
      navigate("/auth/login");
    } else {
      setError(response.message);
    }
  };
  return (
    <div className="mx-auto flex flex-col gap-5 rounded-xl bg-gray-200 p-5">
      <header className="text-center text-2xl">Signup</header>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-lg">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            id="username"
            className="rounded-lg p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            id="password"
            className="rounded-lg p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="rounded-lg p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="rounded-lg p-2 focus:outline-none"
          />
        </div>
        <button className="rounded-lg bg-black px-3 py-2 text-white">
          Signup
        </button>
        {error && <p className="text-center text-red-500">{error}</p>}
      </form>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/auth/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
};
export default SignupLayout;
