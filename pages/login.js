import styles from "../styles/Home.module.css";

const GOOGLE_URL =
  "https://test.stytch.com/v1/public/oauth/google/start?public_token=public-token-test-7740ac4e-d052-431e-af4e-c492870e4d8c";

export default function Login() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Login Page</h1>
        <p className={styles.description}>
          <a href={GOOGLE_URL}>Login With Google</a>
        </p>
      </main>
    </div>
  );
}
