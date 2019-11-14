export interface LoginCredentials {
  email: string;
  password: string;
}
export interface UserInfo {
  id: number;
  email: string;
  name: string;
  role: string;
}
export interface LoginResponse {
  token: string;
  user: UserInfo;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role_id: string;
}
