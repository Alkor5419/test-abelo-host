"use client";
import Button from "@/components/atoms/Button/Button";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  const { user, logout } = useAuthStore();
  return (
    <div className={styles.wrap}>
      <nav className={styles.nav}>
        {user ? (
          <>
            <span className={styles.user}>
              Welcome, {user.firstName} {user.lastName}
            </span>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};
