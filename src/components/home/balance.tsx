"use client";

import { useUserContext } from "@/contexts/user-context";
import { formatNumber } from "@/utils/format-number";

const Balance = () => {
  const [user] = useUserContext();

  return user && <p className="text text-[28px] font-bold">{formatNumber(user.balance)} DUCKS</p>;
};

export default Balance;
