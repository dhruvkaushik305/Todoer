import React from "react";
import { useForm } from "react-hook-form";
import { SignupType } from "../../Lib/authType";
import { signup } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
const SignupLayout: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState<String | null>(null);
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
    <div>
      <header>Signup</header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            id="password"
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="Email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder="Name" {...register("name")} />
        </div>
        <button>Signup</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
export default SignupLayout;
