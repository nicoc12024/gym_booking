import { makeRequest } from "../api/axios";

export const updateProfile = async (userId, formData, token) => {
  try {
    const response = await makeRequest.put(`update-user/${userId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error while updating user info:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const deleteProfile = async (userId, token) => {
  try {
    console.log("inside deletePRofile");

    const response = await makeRequest.delete(`delete-user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error while deleting user:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
