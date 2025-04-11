import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Địa chỉ backend FastAPI

export const fetchSwipeStats = async () => {
  const response = await axios.get(`${API_BASE_URL}/analytics/swipes`);
  return response.data;
};

export const fetchRevenueStats = async () => {
  const response = await axios.get(`${API_BASE_URL}/analytics/revenue`);
  return response.data;
};

export const fetchReports = async () => {
  const response = await axios.get(`${API_BASE_URL}/admin/reports`);
  return response.data;
};

export const banUser = async (userId: number) => {
  await axios.put(`${API_BASE_URL}/admin/users/${userId}/ban`);
};

export const updateReport = async (reportId: number, status: string) => {
  await axios.put(`${API_BASE_URL}/admin/reports/${reportId}`, { status });
};
