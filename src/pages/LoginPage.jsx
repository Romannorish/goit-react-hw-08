import {useDispatch} from "react-redux"
import LoginForm from "../components/LoginForm/LoginForm"
import {userLogIn} from "../redux/auth/operations"

export default function LoginPage() {
  const dispatch = useDispatch()

  const onLogin = (formData) => {
    dispatch(userLogIn(formData))
  }
  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  )
}
