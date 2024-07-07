import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Link
          // style={{
          //   color: "black",
          //   textDecoration: "none",
          // }}
          href="/"
        >
          Home
        </Link>
      </div>
      <div className={styles.root}>
        <button
          style={{
            width: "200px",
            height: "30px",
            backgroundColor: "black",
            cursor: "pointer",
          }}
        >
          Start
        </button>
      </div>
    </main>
  );
}
