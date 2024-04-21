import css from "./Navigation.module.css"
import {NavLink} from "react-router-dom"
export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <ul className={css.list}>
          <NavLink className={css.item} to="/">
            HomePage
          </NavLink>
          <NavLink className={css.item} to="/contacts">
            ContactsPage
          </NavLink>
          <NavLink className={css.item} to="/register">
            RegistrationPage
          </NavLink>
          <NavLink className={css.item} to="/login">
            LoginPage
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
