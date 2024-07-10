import React from "react";
import { useForm } from "react-hook-form";
import { LoginType } from "../../Lib/authType";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/authActions";
const LoginLayout: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<LoginType>();
  const onSubmit = async (data: LoginType) => {
    const response = await login(data);
    if (response.success) {
      localStorage.setItem("authorization", response.token);
      navigate("/");
    } else {
      console.log(response.message);
    }
  };
  return (
    <div>
      <header>Login</header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            {...register("username")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            {...register("password")}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};
export default LoginLayout;
