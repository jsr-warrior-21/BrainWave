"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Login() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/dashboard");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>loading...</p>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
}
