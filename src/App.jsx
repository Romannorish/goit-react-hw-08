import {Navigate, Route, Routes} from "react-router-dom"
import ContactsPage from "./pages/ContactsPage"
import Loader from "./components/Loader/Loader"
import {Suspense, useEffect} from "react"

import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegistrationPage from "./pages/RegistrationPage"
import WelcomePage from "./pages/WelcomePage"
import {useDispatch, useSelector} from "react-redux"
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Layout from "./components/Layout/Layout"
import {refreshUser} from "./redux/auth/operations"
import {selectIsRefreshing} from "./redux/auth/selectors"
import {selectIsError, selectIsLoading} from "./selectors/selectors"

function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectIsError)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user ...</b>
  ) : (
    <Suspense fallback={isLoading && !isError && <Loader />}>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Suspense>
  )
}

export default App
