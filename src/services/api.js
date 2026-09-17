const API_URL = "http://localhost:5001/api";

export const submitInquiry = async (formData) => {
  const response = await fetch(`${API_URL}/inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit inquiry");
  }

  return data;
};

export const subscribeEmail = async (email) => {
  const response = await fetch(`${API_URL}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.trim(),
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Subscription failed");
  }

  return data;
};