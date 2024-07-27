"use client";

import { useUserContext } from "@/contexts/user-context";
import LeaderBoardItem from "./leaderboardItem";
import { LeaderboardData } from "@/app/leaderboard/page";

const MyRank = ({ ranks }: { ranks: LeaderboardData }) => {
  const [user] = useUserContext();
  const rank = ranks.findIndex((r) => r.userId === user.userId) + 1;

  return (
    <LeaderBoardItem
      name={user.name}
      balance={user.balance}
      rank={rank !== 0 ? rank : 101}
      photo={user.avatar ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile/${user.avatar}` : user.avatar}
    />
  );
};

export default MyRank;
