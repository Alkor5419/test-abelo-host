import Image from "next/image";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { User } from "@/types/auth.types";
import { Product } from "@/types/products.types";
import styles from "./Card.module.scss";

interface ICard {
  user: User | null;
  product: Product;
}
export const Card: React.FC<ICard> = ({ user, product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <Image src={product.thumbnail} alt="product" height={400} width={300} />
      </div>
      <div>{product.title}</div>
      <div>{product.category}</div>
      <div className={styles.price}>${product.price}</div>
      {user && <Button className={styles.btn}>Add to cart</Button>}
    </div>
  );
};
