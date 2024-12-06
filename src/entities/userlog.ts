export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserLog extends LoginCredentials {
  token: string;
}
