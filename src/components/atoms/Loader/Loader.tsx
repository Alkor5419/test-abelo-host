import { HTMLAttributes } from "react";
import styles from "./Loader.module.scss";

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  color?: "primary" | "secondary" | "white";
  text?: string;
}

export const Loader = ({ color = "primary", text, className = "", ...props }: LoaderProps) => {
  const spinner = (
    <div className={`${styles.container}  ${className}`} {...props}>
      <div className={`${styles.spinner} ${styles[color]}`} role="status">
        <div className={styles.blade} />
        <div className={styles.blade} />
        <div className={styles.blade} />
        <div className={styles.blade} />
        <div className={styles.blade} />
        <div className={styles.blade} />
        <div className={styles.blade} />
        <div className={styles.blade} />
      </div>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );

  return spinner;
};
