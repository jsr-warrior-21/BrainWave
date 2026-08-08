import Button from "../components/button/page";
import styles from "./page.module.css";
import Image from "next/image";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/5686082/pexels-photo-5686082.jpeg"
          fill={true}
          alt=""
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiance
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            ullam modi voluptas libero, autem molestiae vel ipsa doloribus ea
            illum molestias, ducimus eveniet, necessitatibus atque nesciunt
            rerum quos a consectetur!
            <br />
            <br />
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            ullam modi voluptas libero, autem molestiae vel ipsa doloribus ea
            illum molestias, ducimus eveniet, necessitatibus atque nesciunt
            rerum quos a consectetur!
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            necessitatibus rerum vel delectus deserunt a mollitia modi tempore,
            nesciunt temporibus amet impedit aperiam, eveniet incidunt culpa
            quibusdam aliquid corrupti aut.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
}
