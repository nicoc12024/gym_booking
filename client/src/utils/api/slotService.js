import { makeRequest } from "./axios";
import { toast } from "react-toastify";

const extractErrorMessage = (error) => {
  if (error.response) {
    return error.response.data.message || "Error en la solicitud";
  }
  return error.message || "Error desconocido";
};

export const fetchSlots = async (token) => {
  try {
    const response = await makeRequest.get(`gym-slots/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    const errorMessage = extractErrorMessage(error);
    toast.error(errorMessage);
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
    const errorMessage = extractErrorMessage(error);
    toast.error(errorMessage);
    throw error;
  }
};

export const deleteSlot = async (date_and_start_time, token) => {
  try {
    const response = await makeRequest.delete(`/delete-slot/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: date_and_start_time,
    });

    return response.data;
  } catch (error) {
    const errorMessage = extractErrorMessage(error);
    toast.error(errorMessage);
    throw error;
  }
};
