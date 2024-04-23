import css from "../App.module.css"
import ContactList from "../components/ContactList/ContactList"
import SearchBar from "../components/SearchBox/SearchBox"
import ContactForm from "../components/ContactForm/ContactForm"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchContacts} from "../redux/contacts/operations"
import Loader from "../components/Loader/Loader"
import {selectIsError, selectIsLoading} from "../selectors/selectors"
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"
import {selectUserContacts} from "../redux/contacts/selectors"
import {addContacts} from "../redux/contacts/operations"

export default function ContactsPage() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectIsError)
  const contacts = useSelector(selectUserContacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const handleAddContact = (formData) => {
    dispatch(addContacts(formData))
  }

  return (
    <>
      <div className={css.containerApp}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />
        <SearchBar />
        {isLoading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {contacts && <ContactList />}
      </div>
    </>
  )
}
