import Link from "next/link";

import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>
          Thatch Take Home Project
        </h1>
        <p className={styles.paragraph}>
          I made two pages in this project so I could show some more complex structure, but it wasn't needed. One page would have been enough.
        </p>
        <p className={styles.paragraph}>
          There's nothing of interest on the home page.
        </p>
      </div>
      <div>
        <Link href="/hsatable">
          <div className={styles.link}>
            Click here to navigate to the HSA table
          </div>
        </Link>
      </div>
    </main>
  );
}
