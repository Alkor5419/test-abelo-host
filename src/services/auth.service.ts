import apiClient from "./api-client";
import type { LoginCredentials, User } from "@/types/auth.types";

class AuthService {
  private readonly baseUrl = "/auth";

  async login(credentials: LoginCredentials): Promise<User> {
    try {
      const response = await apiClient.post<User>(`${this.baseUrl}/login`, credentials);

      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  logout(): void {
    localStorage.removeItem("token");
  }
}

export const authService = new AuthService();
