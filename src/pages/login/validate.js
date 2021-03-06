import * as Yup from 'yup'

export const validate =  Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Email must have min 6 characters')
})
 
