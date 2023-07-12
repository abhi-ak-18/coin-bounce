import * as yup from 'yup';


const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const pErrorMessage = 'use lowercase , uppercase and digits';

const signupSchema = yup.object().shape({
    name:yup.string().max(30).required('name is required'),
    username:yup.string().min(5).max(30).required('username is required'),
    email:yup.string().email('email is not valid').required('email is required'),
    password:yup.string().min(8).matches(passwordPattern,{messsage:pErrorMessage}).required('password is required'),
    confirmPassword:yup.string().oneOf([yup.ref('password')], 'passwords must match').required('password is required')
});

export default signupSchema;