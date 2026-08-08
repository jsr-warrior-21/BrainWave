import Button from "@/app/components/button/page";
import Image from "next/image";
import styles from "./page.module.css";
export default async function PortfolioCategory({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/12689347/pexels-photo-12689347.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/12689347/pexels-photo-12689347.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/12689347/pexels-photo-12689347.jpeg"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}
