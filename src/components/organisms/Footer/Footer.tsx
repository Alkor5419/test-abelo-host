"use client";
import { useAuthStore } from "@/store/authStore";
import styles from "./Footer.module.scss";
export const Footer = () => {
  const { user } = useAuthStore();
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.date}>{new Date().getFullYear()}</div>
        {user?.email && <div className={styles.email}>Logged as {user?.email}</div>}
      </div>
    </footer>
  );
};
