import css from "./LoginForm.module.css"
import {ErrorMessage, Field, Form, Formik} from "formik"
import {useDispatch} from "react-redux"
import * as Yup from "yup"
import {userLogIn} from "../../redux/auth/operations"
// import {useDispatch} from "react-redux"

export default function LoginForm() {
  const dispatch = useDispatch()
  const InitialData = {
    name: "",
    email: "",
    password: "",
  }
  const hundleSubmit = (data, formActions) => {
    dispatch(userLogIn(data))
    formActions.resetForm()
  }

  const formValidSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.number().required("Required"),
  })

  return (
    <Formik initialValues={InitialData} onSubmit={hundleSubmit} validationSchema={formValidSchema}>
      <Form className={css.form}>
        <h1>Login</h1>
        <label className={css.lable}>
          Name
          <span className={css.text}></span>
          <Field className={css.input} id="name" type="text" name="name" placeholder="User name" />
          <ErrorMessage className={css.errorMess} name="name" component="span" />
        </label>
        <label className={css.lable}>
          Email
          <span className={css.text}></span>
          <Field
            className={css.input}
            id="email"
            type="email"
            name="email"
            placeholder="enter your email"
          />
          <ErrorMessage className={css.errorMess} name="email" component="span" />
        </label>
        <label className={css.lable}>
          Password
          <span className={css.text}></span>
          <Field
            className={css.input}
            id="password"
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
  )
}
