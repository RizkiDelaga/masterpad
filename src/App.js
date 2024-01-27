import { BrowserRouter } from "react-router-dom";
import { Navigate, Outlet, Route, Routes } from 'react-router';
import Home from "./pages/Home";
import LoginProcess from "./pages/auth/LoginProcess";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calculator from "./pages/Dashboard/Calculator/Calculator";
import Notepad from "./pages/Dashboard/Notepad/Notepad";
import PageNotFound404 from "./pages/PageNotFound404";
import TextEditor from "./pages/Dashboard/Notepad/TextEditor";
import ThemeProviderComponent from "./provider/components/ThemeProviderComponent";
import ThemeModeComponent from "./provider/components/ThemeModeComponent";
import SSOAuthentication from "./pages/auth/SSOAuthentication";


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

    
  const SSOValidation = () => {
    if (localStorage.getItem('accessToken')) {
      // Validasi Token by API
      if (true) {
        // window.location.href =``
        return null
      } else {
        return <Navigate to={`/SSOAuthentication?tokenStatus=expired`} />
      }
    }
  }

  return (
    <ThemeModeComponent>
      <ThemeProviderComponent>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route element={<HandleLoginSuccessfully />}>
              <Route path="SSOAuthentication" element={<SSOAuthentication />}/>
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
      </ThemeProviderComponent>
    </ThemeModeComponent>


  );
}

export default App;
