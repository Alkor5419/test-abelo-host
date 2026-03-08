import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AuthState, User, LoginCredentials } from "@/types/auth.types";
import { authService } from "@/services/auth.service";
import { AxiosError, isAxiosError } from "axios";

interface AuthPersist {
  user: User | null;
  token: string | null;
}
interface ErrorResponse {
  message?: string;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true, error: null });

        try {
          const response = await authService.login(credentials);

          localStorage.setItem("token", response.accessToken);

          set({
            user: response,
            token: response.accessToken,
            isLoading: false,
            error: null,
          });

          return response;
        } catch (error) {
          if (isAxiosError(error)) {
            const errorMessage =
              error.response?.data?.message || error.message || "Invalid username or password";

            set({
              error: errorMessage,
              isLoading: false,
              token: null,
              user: null,
            });
          } else {
            set({
              error: "An unexpected error occurred",
              isLoading: false,
              token: null,
              user: null,
            });
          }

          throw error;
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("auth-storage");

        set({
          user: null,
          token: null,
          error: null,
          isLoading: false,
        });
      },

      isAuthenticated: () => {
        const { token } = get();
        return !!token;
      },

      updateUser: (userData: Partial<User>) => {
        const { user } = get();
        if (user) {
          set({ user: { ...user, ...userData } });
        }
      },
    }),
    {
      name: "auth-storage", // Уникальное имя для хранилища
      storage: createJSONStorage(() => localStorage), // Используем localStorage
      partialize: (state): AuthPersist => ({
        // Сохраняем только нужные поля
        user: state.user,
        token: state.token,
      }),
    }
  )
);

// Добавляем селекторы для производительности
export const useUser = () => useAuthStore((state) => state.user);
export const useToken = () => useAuthStore((state) => state.token);
export const useIsLoading = () => useAuthStore((state) => state.isLoading);
export const useAuthError = () => useAuthStore((state) => state.error);
export const useIsAuthenticated = () => useAuthStore((state) => !!state.token);
