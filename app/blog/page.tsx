import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

type Post = {
  _id: string;
  title: string;
  desc?: string;
  img?: string;
  content?: string;
  username?: string;
  createdAt?: string;
  updatedAt?: string;
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json() as Promise<Post[]>;
}

export default async function Blog() {
  const data: Post[] = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item._id}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.img || "https://images.pexels.com/photos/28607441/pexels-photo-28607441.jpeg"}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc || item.content || ""}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}