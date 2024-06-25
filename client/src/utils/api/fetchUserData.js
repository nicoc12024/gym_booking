export const fetchUserData = async (token, setUser, logout) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
    logout();
  }
};
