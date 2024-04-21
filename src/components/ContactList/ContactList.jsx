import Contact from "./Contact/Contact"
import css from "./ContactList.module.css"
import {useSelector} from "react-redux"
import {selectFilteredContacts} from "../../redux/contacts/selectors"
export default function ContactList() {
  const selestFiltercontact = useSelector(selectFilteredContacts)

  return (
    <div className={css.listBox}>
      <ul className={css.listContact}>
        {selestFiltercontact.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}
