import {useDispatch} from "react-redux"
import {FaUser} from "react-icons/fa"
import {FaPhone} from "react-icons/fa6"
import css from "./Contact.module.css"
import {deleteContacts} from "../../../redux/contacts/operations"

export default function Contact({data: {id, name, number}}) {
  const dispatch = useDispatch()
  const handleDelete = (contactId) => dispatch(deleteContacts(contactId))
  return (
    <div className={css.contactbox}>
      <div>
        <p className={css.user}>
          <FaUser /> {name}
        </p>
        <span className={css.phone}>
          <FaPhone /> {number}
        </span>
      </div>
      <button type="button" className={css.delite} onClick={() => handleDelete(id)}>
        delite
      </button>
    </div>
  )
}
