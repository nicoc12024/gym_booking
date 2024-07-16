import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Layout from "./components/Layout";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./state/AuthContext/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import Account from "./pages/Account/Account";
import PublicRoute from "./PublicRoute";
import Public from "./pages/Public/Public";
import { Provider } from "react-redux";
import store from "./state/Store/index";
import "react-notifications/lib/notifications.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store}>
          <NextUIProvider>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="create-account" element={<Register />} />
              <Route path="/" element={<Layout />}>
                {/* Protected routes */}
                <Route index element={<PublicRoute element={<Public />} />} />
                <Route path="/user" element={<ProtectedRoute element={<Home />} />} />
                <Route
                  path="/profile"
                  element={<ProtectedRoute element={<Profile />} />}
                />
                <Route
                  path="/account"
                  element={<ProtectedRoute element={<Account />} />}
                />
              </Route>
            </Routes>
          </NextUIProvider>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
