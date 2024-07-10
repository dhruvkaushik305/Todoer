export interface SignupType {
  username: string;
  password: string;
  email: string;
  name: string;
}
export interface LoginType {
  username: string;
  password: string;
}

export interface signupResponse {
  success: boolean;
  message: string;
}

export interface loginResponse {
  success: boolean;
  message: string;
  token?: string;
}
