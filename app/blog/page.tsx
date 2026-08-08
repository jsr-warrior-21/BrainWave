import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
export default function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href="/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/28607441/pexels-photo-28607441.jpeg"
            alt=""
            
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>

       <Link href="/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/28607441/pexels-photo-28607441.jpeg"
            alt=""
            
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>

       <Link href="/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/28607441/pexels-photo-28607441.jpeg"
            alt=""
            
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
}
