import React from "react";
import styles from "./SingleItemCard.module.css";

const ItemCard = (props) => {
  return (
    <div className={styles["item-card"]}>
      <h2>Rajender</h2>
      <img style={{ height: `${props.height}` }} src={props.link}></img>
      <small>see more</small>
    </div>
  );
};

export default ItemCard;
