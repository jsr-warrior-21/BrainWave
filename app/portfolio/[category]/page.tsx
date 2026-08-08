import Button from "@/app/components/button/page";
import Image from "next/image";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";

type DataType = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

const getData = (cat: string): DataType[] => {
  const data = items[cat as keyof typeof items];
  if (!data) {
    notFound();
  }
  return data;
};

export default async function PortfolioCategory({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = getData(category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>

      {data.map((datas) => (
        <div className={styles.item} key={datas.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{datas.title}</h1>
            <p className={styles.desc}>{datas.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={datas.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}
