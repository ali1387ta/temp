import LeaderBoardItem from "@/components/leaderboard/leaderboardItem";
import ArrowRightSvg from "@/components/svgs/arrow-right.svg";

const LeaderBoard = () => {
  return (
    <main className="flex min-h-full w-full max-w-screen-md flex-col px-3 pb-[82px] pt-3">
      {/* title */}
      <h1 className="py-6 text-center text-2xl font-bold">Duckling Champs</h1>

      {/* my rank */}
      <div className="mb-4">
        <LeaderBoardItem name="ali" balance={2000} rank={2} photo="/images/logo.png" />
        <button
          className="bg-primary-500 enabled:hover:!bg-primary-600 mt-3 flex h-[46px] w-full items-center justify-center gap-2 rounded-full px-3 py-1 text-lg font-medium text-black transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] enabled:active:scale-95 disabled:cursor-not-allowed disabled:border-zinc-900 disabled:bg-[#ffffff14] disabled:text-zinc-500 disabled:hover:!text-zinc-500"
          disabled
        >
          Boost Score
          <ArrowRightSvg width={20} height={20} />
        </button>
      </div>

      {/* leaderboard */}
      <div className="space-y-3">
        <p className="text-base">3,635,682 Holders</p>
        {Array(50).fill(0).map((_, index) => (
          <LeaderBoardItem name="ali" key={index} balance={2000} rank={index+1} photo="/images/logo.png" />
        ))}
      </div>
    </main>
  );
};

export default LeaderBoard;
