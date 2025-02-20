import {
  loginResponse,
  LoginType,
  signupResponse,
  SignupType,
} from "../Lib/authType";

export const signup = async (input: SignupType) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      },
    );
    const data: signupResponse = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return { success: false, message: "Something went wrong" };
  }
};
export const login = async (input: LoginType) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      },
    );
    const data: loginResponse = await response.json();
    if (data.success) {
      localStorage.setItem("authorization", data.token!);
    }
    return data;
  } catch (err) {
    console.log(err);
    return { success: false, message: "Something went wrong" };
  }
};
