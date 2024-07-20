import Image from "next/image";
import React from "react";

const LeaderBoardItem = ({
  name,
  balance,
  rank,
  photo,
}: {
  name: string;
  balance: number;
  rank: number;
  photo: string;
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#27272a] bg-secondary px-4 py-2.5">
      <div className="flex items-center gap-2.5">
        <div>
          <Image alt="profile" src={photo} width={160} height={160} className="size-11 rounded-full" />
        </div>
        <div>
          <p className="line-clamp-1 text-ellipsis break-all text-sm font-bold">{name}</p>
          <p className="text-sm text-zinc-400">{Intl.NumberFormat("en-US").format(balance)} DUCKS</p>
        </div>
      </div>
      <div className="font-bold">
        {rank > 3 ? (
          `#${rank}`
        ) : (
          <Image alt="rank" src={`/icons/rank-${rank}.png`} width={130} height={130} className="size-9" />
        )}
      </div>
    </div>
  );
};

export default LeaderBoardItem;
