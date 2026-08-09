// app/components/button/page.tsx
export const dynamic = "force-dynamic";
import Link from "next/link";
import styles from "./button.module.css";


export default function Button({
  text,
  url,
}: {
  text: React.ReactNode;
  url: string;
}) {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}
