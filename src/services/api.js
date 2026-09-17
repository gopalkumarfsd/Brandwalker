const API_BASE_URL = "http://localhost:5001/api";

// ===============================
// CONTACT / INQUIRY
// ===============================

export const submitInquiry = async (formData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/inquiries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Failed to submit inquiry"
      );
    }

    return data;
  } catch (error) {
    console.error("Submit Inquiry Error:", error);

    throw new Error(
      error.message ||
        "Unable to submit inquiry. Please try again."
    );
  }
};

// ===============================
// NEWSLETTER SUBSCRIBE
// ===============================

export const subscribeEmail = async (email) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Failed to subscribe"
      );
    }

    return data;
  } catch (error) {
    console.error("Newsletter Error:", error);

    throw new Error(
      error.message ||
        "Unable to subscribe. Please try again."
    );
  }
};

// Optional alias
export const subscribeToNewsletter = subscribeEmail;