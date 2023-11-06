export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  avatar: string;
  description: string;
  phoneNumber: string;
  showConfidentialInformation: boolean;
  birthDate: string;
  email: string;
  login: string;
  registrationDate: Date;
  isAdmin: boolean;
}
