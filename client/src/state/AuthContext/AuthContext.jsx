import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem("auth_token"));

  const login = async (formData) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = response.data;

      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setToken(data.token);
      setUser(data.user);
      console.log("Login successfully:", data);

      return { success: true };
    } catch (error) {
      console.error(
        "Error logging in:",
        error.response ? error.response.data : error.message
      );

      return {
        success: false,
        message: error.response ? error.response.data.message : error.message,
      };
    }
  };

  const createUser = async (formData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register-user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = response.data;

      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);

      console.log("User Created and login successfully:", data);

      return { success: true };
    } catch (error) {
      console.error(
        "Error while creating and logging in user",
        error.response ? error.response.data : error.message
      );

      return {
        success: false,
        message: error.response.data.message,
        errors: error.response.data.errors,
      };
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(null);
      setToken(null);
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");

      console.log("Logout successfully");
    } catch (error) {
      console.error(
        "Error logging out:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, createUser, setUser, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
