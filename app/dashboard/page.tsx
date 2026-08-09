"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type DataType = {
  _id: string;
  userId: number;
  title: string;
  desc: string;
  img: string;
  content: string;
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
  const session = useSession();
  const router = useRouter();

  const fetcher = async (url: string): Promise<DataType[]> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  };

  const { data, error, isLoading, mutate } = useSWR<DataType[]>(
    session?.data?.user?.name
      ? `/api/posts?username=${session.data.user.name}`
      : null,
    fetcher,
  );

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session.status, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = (form[0] as HTMLInputElement).value;
    const desc = (form[1] as HTMLInputElement).value;
    const img = (form[2] as HTMLInputElement).value;
    const content = (form[3] as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data?.user?.name,
        }),
      });
      if (!res.ok) throw new Error("Failed to create post");
      form.reset();
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "loading") {
    return <p>loading...</p>;
  }

  if (session.status === "unauthenticated") {
    return null;
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading..."
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    {post.img && (
                      <Image
                        src={post.img}
                        alt={post.title}
                        width={200}
                        height={100}
                      />
                    )}
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add new Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="content"
            className={styles.textArea}
            rows={10}
            cols={30}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }

  return null;
}
