"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import useSWR from "swr";

type DataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function Dashboard() {
  //   const [data, setData] = useState<DataType[]>([]);
  //   const [err, setErr] = useState(false);
  //   const [isLoading, setIsloading] = useState(false);

  //   useEffect(() => {
  //     const getData = async () => {
  //         setIsloading(true);
  //       const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //         cache: "no-store",
  //       });
  //       if (!res.ok) {
  //         setErr(true);
  //       }
  //       const data = await res.json();
  //       setData(data);
  //       setIsloading(false);
  //     };
  //     getData();
  //   }, []);

  const fetcher = async (url: string): Promise<DataType[]> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  };

  const { data, error, isLoading } = useSWR<DataType[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
  );

  return <div className={styles.container}>Dashboard</div>;
}
