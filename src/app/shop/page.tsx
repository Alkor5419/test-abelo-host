"use client";

import styles from "./page.module.scss";
import { useUser } from "@/store/authStore";
import { useEffect } from "react";
import { useProductsStore } from "@/store/productsStore";
import { Loader } from "@/components/atoms/Loader/Loader";
import { Card } from "@/components/molecules/Card/Card";

export default function Shop() {
  const user = useUser();
  const { products, isLoading, fetchProducts } = useProductsStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className={styles.wrap}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.cotainer}>
          {products && products.map((el) => <Card user={user} product={el} key={el.id} />)}
        </div>
      )}
    </div>
  );
}
