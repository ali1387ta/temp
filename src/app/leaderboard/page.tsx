import LeaderBoardItem from "@/components/leaderboard/leaderboardItem";
import MyRank from "@/components/leaderboard/my-rank";
import ArrowRightSvg from "@/components/svgs/arrow-right.svg";

export type LeaderboardData = {
  userId: number;
  name: string;
  balance: string;
  avatar: string | null;
}[];

const LeaderBoard = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/leaderboard`, { next: { revalidate: 3600 } });
  const leaderboardData = (await res.json()).data as LeaderboardData;

  return (
    <main className="flex min-h-full w-full max-w-screen-md flex-col px-3 pb-[82px] pt-3">
      {/* title */}
      <h1 className="py-6 text-center text-2xl font-bold">Duckling Champs</h1>

      {/* my rank */}
      <div className="mb-4">
        <MyRank ranks={leaderboardData} />
        <button
          className="mt-3 flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-3 py-1 text-lg font-medium text-black transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] enabled:hover:!bg-primary-600 enabled:active:scale-95 disabled:cursor-not-allowed disabled:border-zinc-900 disabled:bg-[#ffffff14] disabled:text-zinc-500 disabled:hover:!text-zinc-500"
          disabled
        >
          Boost Score
          <ArrowRightSvg width={20} height={20} />
        </button>
      </div>

      {/* leaderboard */}
      <div className="space-y-3">
        <p className="text-base">3,635,682 Holders</p>
        {leaderboardData.map((i, index) => (
          <LeaderBoardItem
            name={i.name}
            key={index}
            balance={parseInt(i.balance)}
            rank={index + 1}
            photo={i.avatar ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile/${i.avatar}` : i.avatar}
          />
        ))}
      </div>
    </main>
  );
};

export default LeaderBoard;
