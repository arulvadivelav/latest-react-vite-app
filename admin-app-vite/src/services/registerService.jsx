import { apiRequest } from "./AuthServices";

export const getCastes = async () => {
  return await apiRequest("castes/");
};

export const getSubCastes = async (casteId) => {
  return await apiRequest(`sub-castes/?caste=${casteId}`);
};

export const getCities = async (search = "") => {
  const url = search ? `cities/?search=${search}` : "cities/";
  return await apiRequest(url);
};

export const getEducations = async (level = "") => {
  const url = level ? `educations/?level=${level}` : "educations/";
  return await apiRequest(url);
};

export const getOccupations = async (employmentType = "") => {
  const url = employmentType ? `occupations/?employment_type=${employmentType}` : "occupations/";
  return await apiRequest(url);
};

export const submitProfile = async (payload) => {
  return await apiRequest("register/", "POST", payload, true);
};