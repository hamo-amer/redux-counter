import "./App.css";

import Home from "./components1/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components1/NotFound";
import Profile from "./components1/Profile";
import NavBar from "./components1/NavBar";
import UserList from "./components1/UserList";
import PrivateRoute from "./components1/PrivateRoute";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='users'
          element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          }
        />
        <Route
          path='profile/:id'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
