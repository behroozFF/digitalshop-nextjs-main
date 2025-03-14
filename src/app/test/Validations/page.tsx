  import * as yup from 'yup';

  const userSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(4, 'Password must be at least 4 characters').max(10, 'Password must be less than 10 characters').required('Password is required'),
  })

  export default userSchema;
