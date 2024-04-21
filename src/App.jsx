import {Route, Routes} from "react-router-dom"
import ContactsPage from "./pages/ContactsPage"
import Loader from "./components/Loader/Loader"
import {Suspense} from "react"
import Navigation from "./components/Navigation/Navigation"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegistrationPage from "./pages/RegistrationPage"

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
