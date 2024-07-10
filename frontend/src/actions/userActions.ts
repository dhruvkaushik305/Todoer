import { UserInfoResponse } from "../Lib/userType";

const token = localStorage.getItem("authorization");
export const getUserInfo = async () => {
  try {
    const response = await fetch("/api/user/info", {
      method: "GET",
      headers: {
        authorization: token!,
        "Content-Type": "application/json",
      },
    });
    const data: UserInfoResponse = await response.json();
    return data;
  } catch (err) {
    console.log("Error getting user info", err);
  }
};
