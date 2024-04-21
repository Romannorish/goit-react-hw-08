import {useDispatch, useSelector} from "react-redux"
import {selectUser} from "../../redux/auth/selectors"
import {userLogOut} from "../../redux/auth/operations"

export default function UserMenu() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  return (
    <div>
      <p>Welcome, {user.name} !</p>
      <button type="button" onClick={() => dispatch(userLogOut())}>
        Logout
      </button>
    </div>
  )
}
