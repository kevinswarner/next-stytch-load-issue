import { useEffect } from "react";
import { useStytchSession } from "@stytch/stytch-react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const stytchSession = useStytchSession();

  useEffect(() => {
    if (!stytchSession) window.location.replace("/login");
  }, [stytchSession]);

  if (!stytchSession) return null;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Protected Page</h1>
        <p className={styles.description}>
          This page is protected. It should only be available if the user is
          logged in.
        </p>
      </main>
    </div>
  );
}
