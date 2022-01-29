import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["app-header"]}>
      <Link to="/">
        <div>
          <img
            className={styles["home-logo"]}
            src="https://meyting.com/logos/github.png"
          ></img>
        </div>
      </Link>
      <Link to="/users" style={{ textDecoration: "none" }}>
        <div className={styles["nav-link"]}>
          <p>Users</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
