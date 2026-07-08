/**
 * 认证相关 API 接口
 */
import request from "@/utils/request";

export function registerApi(data) {
  return request.post("/auth/register", data);
}

export function loginApi(data) {
  // Преобразуем данные в формат URLSearchParams (Form Data), который ожидает FastAPI
  const formData = new URLSearchParams();
  formData.append("username", data.username);
  formData.append("password", data.password);

  return request.post("/auth/login", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export function getUserInfoApi() {
  return request.get("/auth/me");
}
