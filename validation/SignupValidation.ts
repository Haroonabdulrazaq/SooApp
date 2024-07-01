import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  competition: Yup.string().required('You must pick a competition to register'),
  email: Yup.string().email('Email format is invalid').required('This is a required field.'),
  password: Yup.string()
    .min(8, 'At least 8 letters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/, 
      `Include at least 3 uppercase letters, lowercase letters, numbers, or special letters,
      Special characters are limited to (~!@#$%^&*()_-+=?)`),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'New password and Confirm password do not match')
    .required('This is a required field.'),
  firstName: Yup.string().required('This is a required field.'),
  lastName: Yup.string().required('This is a required field.'),
});
