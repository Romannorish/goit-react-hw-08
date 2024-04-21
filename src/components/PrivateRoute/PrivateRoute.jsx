import {useSelector} from "react-redux"
import {selectIsLoggedIn, selectIsRefreshing} from "../../redux/auth/selectors"
import {Navigate} from "react-router-dom"

export default function PrivateRoute({children, redirectTo = "/login"}) {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isRefreshing = useSelector(selectIsRefreshing)
  return !isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} replace /> : children
}
