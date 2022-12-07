import React from "react";
import styles from "./Card.module.css";

const Card = ({ photo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{photo.albumId}</h1>
        <div className={styles.id_item}>{photo.id}</div>
      </div>
      <p style={{ fontSize: "12px" }}>{photo.title} </p>
      <img
        src={photo.url}
        alt=''
        className={styles.image_box}
      />
    </div>
  );
};

export default Card;
