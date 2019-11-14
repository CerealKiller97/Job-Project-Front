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
