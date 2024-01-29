import { BrowserRouter } from "react-router-dom";
import { Navigate, Outlet, Route, Routes } from 'react-router';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calculator from "./pages/Dashboard/Calculator/Calculator";
import Notepad from "./pages/Dashboard/Notepad/Notepad";
import TextEditor from "./pages/Dashboard/Notepad/TextEditor";
import ThemeProviderComponent from "./provider/components/ThemeProviderComponent";
import ThemeModeComponent from "./provider/components/ThemeModeComponent";
import SSOAuthentication from "./pages/Auth/SSOAuthentication";
import Profile from "./pages/Dashboard/Profile/Profile";
import Notifications from "./pages/Dashboard/Notifications/Notifications";
import Settings from "./pages/Dashboard/Settings/Settings";
import ActiveSubscription from "./pages/Dashboard/ActiveSubscription/ActiveSubscription";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import SSOProcess from "./pages/Auth/SSOProcess";



function App() {

  const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("accessToken")) {
        return <Navigate to={"/Dashboard"} />
    }
    return <Outlet/>;
  }

  const ProtectedRoute = () => {
    if (!localStorage.getItem("accessToken")) {
        return <Navigate to={"/SSOAuthentication"} />
    }
    return <Outlet/>;
  }

  return (
    <ThemeModeComponent>
      <ThemeProviderComponent>
        <BrowserRouter>
          <Routes>
            <Route element={<HandleLoginSuccessfully />}>
              <Route path="SSOAuthentication" element={<SSOAuthentication />}/>
            </Route>
            
            <Route element={<DashboardLayout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="Dashboard" element={<Dashboard />}/>
                <Route path="Dashboard/Profile" element={<Profile />}/>
                <Route path="Dashboard/Notifications" element={<Notifications />} />
                <Route path="Dashboard/Settings" element={<Settings />} />
                <Route path="Dashboard/ActiveSubscription" element={<ActiveSubscription />} />

                <Route path="Dashboard/Notepad" element={<Notepad />}/>
                <Route path="Dashboard/Notepad/TextEditor" element={<TextEditor />}/>
                <Route path="Dashboard/Calculator" element={<Calculator />}/>
              </Route>
            </Route>

            <Route element={<DefaultLayout />}>
              <Route path="" element={<Home />} />
            </Route>
            
            <Route path="SSOProcess" element={<SSOProcess />}/>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProviderComponent>
    </ThemeModeComponent>

  );
}

export default App;
