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

    return json; // You might want to return some data upon successful signup
  } catch (error) {
    throw error; // Re-throw the error to handle it in the component
  }
};
