const BASE_URL = "https://django-practice-v1.onrender.com/v1/";

export const apiRequest = async (
  endpoint,
  method = "GET",
  body = null,
  isFormData = false
) => {

  const config = {
    method,
    headers: {},
  };

  // JSON request
  if (!isFormData) {
    config.headers["Content-Type"] = "application/json";
  }

  // Body
  if (body) {
    config.body = isFormData
      ? body
      : JSON.stringify(body);
  }

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    config
  );

  const data = await response.json();

  return data;
};