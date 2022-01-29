import React from "react";
import ItemCard from "../cards/SingleItemCard";
import styles from "./Home.module.css";

const Home = () => {
  const img1 =
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg";
  const img2 = "https://m.media-amazon.com/images/I/61PrAQ4vipL._SX3000_.jpg";

  return (
    <div className={styles["home"]}>
      <div>
        <img
          className={styles["home-banner"]}
          src="https://m.media-amazon.com/images/I/61jgTzXKI+L._SX3000_.jpg"
        ></img>
      </div>
      <div className={styles["home-content-row"]}>
        <ItemCard link={img1}></ItemCard>
        <ItemCard link={img1}></ItemCard>
        <ItemCard link={img1}></ItemCard>
      </div>
      <div className={styles["home-content-row"]}>
        <ItemCard height="300px" link={img2}></ItemCard>
      </div>
      <div className={styles["home-content-row"]}>
        <ItemCard link={img1}></ItemCard>
        <ItemCard link={img1}></ItemCard>
        <ItemCard link={img1}></ItemCard>
        <ItemCard link={img1}></ItemCard>
        <ItemCard link={img1}></ItemCard>
      </div>
    </div>
  );
};

export default Home;
