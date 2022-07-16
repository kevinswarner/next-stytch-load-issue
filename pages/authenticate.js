import { useEffect } from "react";
import { useStytchLazy, useStytchSession } from "@stytch/stytch-react";

export default function Authenticate() {
  const stytchClient = useStytchLazy();
  const session = useStytchSession();

  useEffect(() => {
    if (session) {
      window.location.href = "/";
    } else {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      stytchClient.oauth.authenticate(token, { session_duration_minutes: 30 });
    }
  }, [stytchClient, session]);

  return null;
}
