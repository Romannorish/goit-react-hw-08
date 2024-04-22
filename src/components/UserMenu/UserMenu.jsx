import {useDispatch, useSelector} from "react-redux"
import {selectUser} from "../../redux/auth/selectors"
import {userLogOut} from "../../redux/auth/operations"
import css from "../Navigation/Navigation"
export default function UserMenu() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  console.log(user)
  return (
    <header className={css.header}>
      <div>
        <p>Welcome, {user.name} !</p>
        <button type="button" onClick={() => dispatch(userLogOut())}>
          Logout
        </button>
      </div>
    </header>
  )
}
