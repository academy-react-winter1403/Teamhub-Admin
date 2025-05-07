import http from "../interceptor";

export const deleteFunc = async (
  endPoint: string,
  params?: unknown
): Promise<unknown> => {
  try {
    console.log("DELETE params:", params);
    const response = await http.delete(endPoint, { params });
    console.log("DELETE response:", response);
    return response;
  } catch (error) {
    console.error("Delete request failed:", error);
    throw error;
  }
};
