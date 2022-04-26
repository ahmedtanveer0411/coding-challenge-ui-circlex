import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('name is required'),
    phone: yup
        .string('Enter your phone number')
        .required('phone number is required'),
    email: yup
        .string('Enter your email')
        .required('email is required'),
});