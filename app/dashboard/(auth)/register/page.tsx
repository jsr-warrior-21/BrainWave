"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [err, setErr] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      setErr("Please enter valid form data");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErr(data.message || "Registration failed");
        return;
      }

      router.push("/dashboard/login?success=Account%20has%20been%20created");
    } catch (error: unknown) {
      setErr(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="username"
          className={styles.input}
          required
        />

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
          Register
        </button>
      </form>

      {err && <p>{err}</p>}

      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
}
