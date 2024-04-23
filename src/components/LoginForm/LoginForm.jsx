import css from "./LoginForm.module.css"
import {ErrorMessage, Field, Form, Formik} from "formik"
import {useDispatch} from "react-redux"
import * as Yup from "yup"
import {userLogIn} from "../../redux/auth/operations"
import toast, {Toaster} from "react-hot-toast"
// import {useDispatch} from "react-redux"

export default function LoginForm() {
  const dispatch = useDispatch()
  const InitialData = {
    email: "",
    password: "",
  }
  const hundleSubmit = (formData, formActions) => {
    dispatch(userLogIn(formData))
      .then(() => {
        toast.success("Login sucssess")
      })
      .catch(() => {
        toast.error("Sorry, Login error.")
      })
    formActions.resetForm()
  }

  const formValidSchema = Yup.object().shape({
    email: Yup.string().required("Email is required!").email("Must be a valid email!"),
    password: Yup.string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters!"),
  })

  return (
    <>
      <Formik
        initialValues={InitialData}
        onSubmit={hundleSubmit}
        validationSchema={formValidSchema}
      >
        <Form className={css.form}>
          <h1>Login</h1>
          <label className={css.lable}>
            Email
            <span className={css.text}></span>
            <Field className={css.input} type="text" name="email" placeholder="enter your email" />
            <ErrorMessage className={css.errorMess} name="email" component="span" />
          </label>
          <label className={css.lable}>
            Password
            <span className={css.text}></span>
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="enter you password"
            />
            <ErrorMessage className={css.errorMess} name="password" component="span" />
          </label>
          <button
            className={css.btnSubmit}
            type="submit"
            aria-label="Register"
            title="click to sing in"
          >
            Sign In
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}
