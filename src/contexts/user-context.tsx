"use client";

import Loading from "@/app/loading";
import auth from "@/lib/auth";
import getUser from "@/lib/get-user";
import { User } from "@/types";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

export const UserContext = createContext<[User | undefined, Dispatch<SetStateAction<User | undefined>>]>([
  undefined,
  () => {},
]);

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<User>();

  useEffect(() => {
    auth().then(() => getUser(setData));
  }, []);

  return data ? <UserContext.Provider value={[data, setData]}>{children}</UserContext.Provider> : <Loading />;
}

export function useUserContext() {
  return useContext(UserContext) as [User, Dispatch<SetStateAction<User>>];
}
