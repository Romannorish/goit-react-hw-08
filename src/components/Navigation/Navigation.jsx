import {useSelector} from "react-redux"
import css from "./Navigation.module.css"
import {NavLink} from "react-router-dom"
import {selectIsLoggedIn} from "../../redux/auth/selectors"
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <ul className={css.list}>
          <NavLink className={css.item} to="/">
            Welcome
          </NavLink>
        </ul>
      </nav>
      {isLoggedIn && (
        <nav className={css.navigation}>
          <ul className={css.list}>
            <NavLink className={css.item} to="/home">
              HomePage
            </NavLink>
            <NavLink className={css.item} to="/contacts">
              ContactsPage
            </NavLink>
          </ul>
        </nav>
      )}
    </header>
  )
}
