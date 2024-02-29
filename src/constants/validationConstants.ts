/* eslint-disable no-useless-escape */
export const PasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.,$!%;:'*?&])[A-Za-z\d@.,$!%;:'*?&]{8,32}$/;
export const PhoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
