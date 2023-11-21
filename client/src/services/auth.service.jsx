export const signup = async (email, password) => {
  try {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    console.log("json:", json);

    if (!response.ok) throw new Error(json.error || "Failed to sign up");

    return json;
  } catch (error) {
    throw error; // Re-throw the error to handle it in the component
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    console.log("json:", json);

    if (!response.ok) throw new Error(json.error || "Failed to login");

    return json;
  } catch (error) {
    throw error;
  }
};
