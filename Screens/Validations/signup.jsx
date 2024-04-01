import * as Yup from "yup"



export const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
       .email("Invalid email")
       .required("Email is required"),
    password: Yup.string()
       .min(4, "Password must be at least 8 characters")
       .max(16, "Password must be 16")
       .required("Password is required"),
    confirmPassword: Yup.string()
       .oneOf([Yup.ref("password"), null], "Passwords must match")
       .required("Confirm password is required"),
})

const user = await RegisterSchema.validate(await fetchUser());



// const LoginSchema = Yup.object().shape({
// const PasswordSchema = Yup.object().shape({
//     password: Yup.string()
//    .min(4, "Password must be at least 8 characters long")
//    .max(8, "Password must be at most")
//    .required("Password is required"),
// })
// const EmailSchema = Yup.object().shape({
//     email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
// })