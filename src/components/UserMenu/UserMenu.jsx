import {useDispatch, useSelector} from "react-redux"
import {selectUser} from "../../redux/auth/selectors"
import {userLogOut} from "../../redux/auth/operations"
import css from "./UserMenu.module.css"

export default function UserMenu() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  return (
    <div className={css.box}>
      <p className={css.item}>Welcome, {user.name} !</p>
      <button className={css.btnSubmit} type="button" onClick={() => dispatch(userLogOut())}>
        Logout
      </button>
    </div>
  )
}
