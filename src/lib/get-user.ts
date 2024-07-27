import { User } from "@/types";
import WebApp from "@twa-dev/sdk";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export const getUser = (setState: Dispatch<SetStateAction<User | undefined>>) => {
  if (typeof window !== "undefined")
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      next: {
        revalidate: 300,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("error fetching user");
        return res.json();
      })
      .then((data) => data.data as User)
      .then((userData) => setState(userData))
      .catch(() => {
        localStorage.removeItem("token");
        toast.error("error fetching user");
        WebApp.close();
      });
};

export default getUser;
