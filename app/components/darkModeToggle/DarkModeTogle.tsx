"use client"
import styles from "./darkmode.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
export default function DarkModeTogle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { toggle, mode } = context;
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
