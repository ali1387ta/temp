import WebApp from "@twa-dev/sdk";
import { toast } from "react-toastify";

const auth = async () => {
  if (typeof window !== "undefined" && !localStorage.getItem("token")) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          initData: WebApp.initData,
        }),
      });

      if (!res.ok) throw new Error("auth error");

      const data = await res.json();
      localStorage.setItem("token", data.token);
    } catch (err) {
      toast.error("Failed to login");
      WebApp.close();
    }
  }
};

export default auth;
