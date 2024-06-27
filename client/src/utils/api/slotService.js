import { makeRequest } from "./axios";

export const fetchSlots = async (token) => {
  try {
    const response = await makeRequest.get(`gym-slots/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error while fetching slots:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const bookSlot = async (date_and_start_time, token) => {
  try {
    const response = await makeRequest.post(`book-slot/`, date_and_start_time, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error while booking slot:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const deleteSlot = async (userId, token) => {
  try {
    const response = await makeRequest.delete(`/delete-slot/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error while booking slot:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
