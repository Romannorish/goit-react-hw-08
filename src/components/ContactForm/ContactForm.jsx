import css from "./ContactForm.module.css"
import {ErrorMessage, Field, Form, Formik} from "formik"
import * as Yup from "yup"
import {useDispatch} from "react-redux"
import {addContacts} from "../../redux/contacts/operations"
import toast, {Toaster} from "react-hot-toast"

export default function ContactForm() {
  const dispatch = useDispatch()
  const InitialData = {
    name: "",
    number: "",
  }
  const hundleSubmit = (data, formActions) => {
    dispatch(addContacts(data))
      .unwrap()
      .then(() => {
        toast.success("Contact created")
      })
      .cathe(() => {
        toast.error("Sorry, something went wrong.")
      })
    formActions.resetForm()
  }

  const formValidSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("Required"),
  })

  return (
    <>
      <Formik
        initialValues={InitialData}
        onSubmit={hundleSubmit}
        validationSchema={formValidSchema}
      >
        <Form className={css.form}>
          <label className={css.lable}>
            Name
            <span className={css.text}></span>
            <Field
              className={css.input}
              id="name"
              type="text"
              name="name"
              placeholder="User name"
            />
            <ErrorMessage className={css.errorMess} name="name" component="span" />
          </label>
          <label className={css.lable}>
            Phone number
            <span className={css.text}></span>
            <Field
              className={css.input}
              id="number"
              type="number"
              name="number"
              placeholder="Phone number +380"
            />
            <ErrorMessage className={css.errorMess} name="number" component="span" />
          </label>
          <button
            className={css.btnSubmit}
            type="submit"
            aria-label="add new contact"
            title="click if  you want to add a new contact"
          >
            Add new contact
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}
