import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AuthState, User, LoginCredentials } from "@/types/auth.types";
import { authService } from "@/services/auth.service";
import { isAxiosError } from "axios";

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
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state): AuthPersist => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);

export const useUser = () => useAuthStore((state) => state.user);
export const useToken = () => useAuthStore((state) => state.token);
export const useIsLoading = () => useAuthStore((state) => state.isLoading);
export const useAuthError = () => useAuthStore((state) => state.error);
