import { UserInfoResponse } from "../Lib/userType";

export const getUserInfo = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/info`,
      {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("authorization")!,
        },
      },
    );
    const data: UserInfoResponse = await response.json();
    return data;
  } catch (err) {
    console.log("Error getting user info", err);
  }
};
