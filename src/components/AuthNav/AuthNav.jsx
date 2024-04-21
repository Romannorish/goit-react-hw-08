import {NavLink} from "react-router-dom"
import css from "./AuthNav.module.css"
export default function AuthNav() {
  return (
    <header>
      <ul className={css.list}>
        <NavLink className={css.item} to="/register">
          RegistrationPage
        </NavLink>
        <NavLink className={css.item} to="/login">
          LoginPage
        </NavLink>
      </ul>
    </header>
  )
}
