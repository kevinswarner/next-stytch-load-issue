import { useStytch } from "@stytch/stytch-react";
import styles from "../styles/Home.module.css";

export default function Sample() {
  const stytchClient = useStytch();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Sample Page</h1>

        <p className={styles.description}>
          This page includes a useStytch hook.
        </p>
      </main>
    </div>
  );
}
