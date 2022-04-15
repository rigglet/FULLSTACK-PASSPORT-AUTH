//react
import { useState, useEffect } from "react";
//routing
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//containers
import Signup from "./containers/signup";
import Login from "./containers/login";
import Admin from "./containers/admin";
//api data
import { getProjects, deleteProject, addProject } from "./api/api";

function App() {
  const [auth, setAuth] = useState({});
  const [projects, setProjects] = useState([]);

  //get projects data
  useEffect(() => {
    getProjects().then((results) => {
      if (results.status === 200) {
        setProjects(results.data);
      }
    });
  }, []);

  console.log(projects);

  //DELETE ITEM
  const handleItemDelete = (id) => {
    deleteProject(id).then((results) => {
      if (results.status === 200) {
        setProjects(projects.filter((project) => project._id !== id));
      }
    });
  };

  //ADD ITEM
  const handleItemAdd = () => {
    const newProject = {
      projectName: "New project",
      shortDescription: "A fancy new project",
    };
    addProject(newProject).then((results) => {
      if (results.status === 200) {
        setProjects([...projects, results.data]);
      }
    });
  };

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
          <Route
            exact
            path="/"
            element={
              <Login
                setAuth={setAuth}
                projects={projects}
                setProjects={setProjects}
                handleItemDelete={handleItemDelete}
                handleItemAdd={handleItemAdd}
              />
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Login
                setAuth={setAuth}
                projects={projects}
                setProjects={setProjects}
                handleItemDelete={handleItemDelete}
                handleItemAdd={handleItemAdd}
              />
            }
          ></Route>
          <Route
            exact
            path="/register"
            element={
              <Signup
                auth={auth}
                setAuth={setAuth}
                projects={projects}
                setProjects={setProjects}
                handleItemDelete={handleItemDelete}
                handleItemAdd={handleItemAdd}
              />
            }
          />

          {/* <PrivateRoute path="/admin">
            Admin auth={auth} setAuth={setAuth} />
          </PrivateRoute> */}
          {/* <Route
            exact
            path="/loggedin"
            element={<Admin setAuth={setAuth} />}
          /> */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin
                  auth={auth}
                  setAuth={setAuth}
                  projects={projects}
                  setProjects={setProjects}
                  handleItemDelete={handleItemDelete}
                  handleItemAdd={handleItemAdd}
                />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
