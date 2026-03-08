"use client";

import styles from "./page.module.scss";
import { AuthForm } from "@/components/organisms/AuthForm/AuthForm";
import { useToken } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const token = useToken();
  const router = useRouter();
  useEffect(() => {
    if (token) {
      router.push("/shop");
    }
  }, [token, router]);

  return (
    <div className={styles.wrap}>
      <AuthForm />
    </div>
  );
}
