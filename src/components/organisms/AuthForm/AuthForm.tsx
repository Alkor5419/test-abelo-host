"use client";
import React, { useState, FormEvent } from "react";
import Button from "@/components/atoms/Button/Button";
import { useAuthStore } from "@/store/authStore";
import { Loader } from "@/components/atoms/Loader/Loader";
import styles from "./AuthForm.module.scss";
import Input from "@/components/atoms/Input/Input";
export const AuthForm = () => {
  const [fields, setFields] = useState({
    username: { value: "", error: "" },
    password: { value: "", error: "" },
  });
  const [touched, setTouched] = useState({ username: false, password: false }); // 👈 добавляем touched

  const { login, isLoading, error } = useAuthStore();

  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();
    if (!trimmed) return `${name} не может быть пустым`;
    if (trimmed.length < 3) return `${name} должен содержать минимум 3 символа`;
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: {
        value,
        error: "",
      },
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({ username: true, password: true });

    const usernameError = validateField("Username", fields.username.value);
    const passwordError = validateField("Password", fields.password.value);

    setFields((prev) => ({
      username: { ...prev.username, error: usernameError },
      password: { ...prev.password, error: passwordError },
    }));

    if (!usernameError && !passwordError) {
      login({ username: "emilys", password: "emilyspass" });
    }
  };

  const isFormValid = !fields.username.error && !fields.password.error;
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <Input
          name="username"
          label="Username"
          className={styles.input}
          value={fields.username.value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username ? fields.username.error : ""}
        />
        <Input
          name="password"
          className={styles.input}
          type="password"
          label="Password"
          value={fields.password.value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password ? fields.password.error : ""}
        />
        {error && <p className={styles.error}>{error}</p>}
        {isLoading ? (
          <Loader />
        ) : (
          <Button type="submit" variant="primary" disabled={!isFormValid}>
            Login
          </Button>
        )}
      </form>
    </div>
  );
};
