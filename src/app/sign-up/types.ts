export type SignUpDTO = {
  userId: number;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  description: string;
  phoneNumber: string;
  showConfidentialInformation: boolean;
  birthDate: Date;
  email: string;
};
