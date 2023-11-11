import * as yup from 'yup';

import {
  PasswordRegex,
  PhoneRegex,
} from '@/shared/constants/validationConstants';

const validationSchema = yup
  .object({
    login: yup.string().required('Login required').min(4),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password minimal length is 8')
      .matches(
        PasswordRegex,
        'Password may contain only latin characters, numbers and special characters.',
      ),
    firstName: yup.string().required('First Name required').min(4),
    lastName: yup.string().required('Last Name required').min(4),
    description: yup.string().required('Description required').min(15),
    phoneNumber: yup
      .string()
      .required('Phone number required')
      .matches(PhoneRegex, 'Incorrect phone number'),
    showConfidentialInformation: yup
      .boolean()
      .required('Show Confidential Information required'),
    birthDate: yup.date().required('Birth dare required').min(new Date(1950)),
    email: yup
      .string()
      .required('Email required')
      .email('Incorrect email')
      .min(5, 'Email minimum length is 5'),
  })
  .required();

export default function Profile() {
  console.log('validationSchema ==>', validationSchema);
  return <div>Profile</div>;
}
