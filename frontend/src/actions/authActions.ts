import { LoginType, SignupType } from "../Lib/authType";

export const signup = async (input: SignupType) => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const login = async (input: LoginType) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
