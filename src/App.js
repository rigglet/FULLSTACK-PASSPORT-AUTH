import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./containers/signup";
import Login from "./containers/login";
import LoggedIn from "./containers/loggedIn";

function App() {
  const [auth, setAuth] = useState({});
  //const Navigate = useNavigate();

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  // function PrivateRoute({ children, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={() => (auth.username ? children : navigate("/login"))}
  //     />
  //   );
  // }

  const PrivateRoute = ({ children, ...rest }) => {
    return auth.username ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login setAuth={setAuth} />} />
          <Route
            exact
            path="/login"
            element={<Login setAuth={setAuth} />}
          ></Route>
          <Route
            exact
            path="/register"
            element={<Signup setAuth={setAuth} />}
          />

          {/* <PrivateRoute path="/loggedIn">
            <LoggedIn auth={auth} setAuth={setAuth} />
          </PrivateRoute> */}
          {/* <Route
            exact
            path="/loggedin"
            element={<LoggedIn setAuth={setAuth} />}
          /> */}
          <Route
            path="/loggedIn"
            element={
              <PrivateRoute>
                <LoggedIn auth={auth} setAuth={setAuth} />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
