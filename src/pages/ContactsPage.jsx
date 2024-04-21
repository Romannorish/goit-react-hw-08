import css from "../App.module.css"
import ContactList from "../components/ContactList/ContactList"
import SearchBar from "../components/SearchBox/SearchBox"
import ContactForm from "../components/ContactForm/ContactForm"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchContacts} from "../redux/contactsOps"
import Loader from "../components/Loader/Loader"
import {selectIsError, selectIsLoading} from "../selectors/selectors"
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"

export default function ContactsPage() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectIsError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <div className={css.containerApp}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBar />
        {isLoading && !error && <Loader />}
        {error && <ErrorMessage error={error} />}
        {!isLoading && !error && <ContactList />}
      </div>
    </>
  )
}
