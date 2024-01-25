import { BrowserRouter } from "react-router-dom";
import { Navigate, Outlet, Route, Routes } from 'react-router';
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LoginProcess from "./pages/auth/LoginProcess";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calculator from "./pages/Dashboard/Calculator/Calculator";
import Notepad from "./pages/Dashboard/Notepad/Notepad";
import PageNotFound404 from "./pages/PageNotFound404";
import TextEditor from "./pages/Dashboard/Notepad/TextEditor";


function App() {

  const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("accessToken")) {
        return <Navigate to={"/Dashboard"} />
    }
    return <Outlet/>;
  }

  const ProtectedRoute = () => {
    if (!localStorage.getItem("accessToken")) {
        return <Navigate to={"/Login"} />
    }
    return <Outlet/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route element={<HandleLoginSuccessfully />}>
          <Route path="Login" element={<Login />}/>
          <Route path="Register" element={<Register />}/>
        </Route>
        <Route path="LoginProcess" element={<LoginProcess />}/>

        <Route element={<ProtectedRoute />}>
          <Route path="Dashboard" element={<Dashboard />}/>
          <Route path="Dashboard/Notepad" element={<Notepad />}/>
          <Route path="Dashboard/Notepad/TextEditor" element={<TextEditor />}/>
          <Route path="Dashboard/Calculator" element={<Calculator />}/>
        </Route>
        
        <Route path="*" element={<PageNotFound404 />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
