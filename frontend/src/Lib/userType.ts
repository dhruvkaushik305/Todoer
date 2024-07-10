export interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  username: string;
}
export interface UserInfoResponse {
  success: boolean;
  user: UserType;
}
// "_id": "668e71ac47ff3a211e1742b0",
// "name": "test user",
// "email": "test@todoer.com",
// "password": "$2b$10$byL6Gnf7k4sseGornoy5i.Sj9OHqAtkx5pLcbrUv8PfLeIGLKYZUW",
// "username": "testuser",
// "todos": [],
// "activityData": [],
// "date": "2024-07-10T11:34:04.980Z",
// "__v": 0
