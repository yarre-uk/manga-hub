export type ChangePasswordDTO = {
  token: string;
  password: string;
  confirmPassword: string;
};

export type ChangePasswordForm = {
  password: string;
  confirmPassword: string;
};
