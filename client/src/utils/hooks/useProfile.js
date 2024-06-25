// src/hooks/useProfile.js
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../state/AuthContext/AuthContext.jsx";
import { updateProfile, deleteProfile } from "../../utils/api/profileService";
import { useNavigate } from "react-router-dom";

const useProfile = () => {
  const { user, setUser, token, setToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    apartment_letter: "",
    floor: "",
    phone_number: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        last_name: user.last_name || "",
        apartment_letter: user.apartment_letter || "",
        floor: user.floor || "",
        phone_number: user.phone_number || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const data = await updateProfile(user.id, formData, token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    } catch (error) {
      console.error(
        "Error while updating user info:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      name: user.name || "",
      last_name: user.last_name || "",
      apartment_letter: user.apartment_letter || "",
      floor: user.floor || "",
      phone_number: user.phone_number || "",
      email: user.email || "",
    });
  };

  const handleDeleteProfile = async () => {
    try {
      await deleteProfile(user.id, token);
      setUser(null);
      setToken(null);
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");

      navigate("/");
    } catch (error) {
      console.error(
        "Error while deleting user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return {
    formData,
    isEditing,
    handleChange,
    handleEdit,
    handleSave,
    handleCancel,
    handleDeleteProfile,
  };
};

export default useProfile;
