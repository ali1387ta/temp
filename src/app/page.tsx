import CommunityItem from "@/components/home/community-item";
import Reward from "@/components/home/reward";
import CalenderSvg from "@/components/svgs/calender.svg";
import KingSvg from "@/components/svgs/king.svg";
import PeopleSvg from "@/components/svgs/people.svg";
import StarSvg from "@/components/svgs/star.svg";
import TickSvg from "@/components/svgs/tick.svg";
import WorldSvg from "@/components/svgs/world.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-full w-full max-w-screen-md flex-col px-3">
      {/* header */}
      <header className="flex h-14 items-center justify-between">
        <button className="group flex items-center gap-2">
          <span className="text-primary">
            <KingSvg />
          </span>
          <p className="font-bold group-hover:text-primary">&DUMP Price</p>
        </button>
        <button className="group flex items-center gap-2 rounded-3xl border border-[#ffc81280] px-3 py-1">
          <span className="text-primary">
            <WorldSvg />
          </span>
          <p className="text-base font-bold transition-all group-hover:text-primary">Vote Exchange</p>
          <span className="animate-pulse text-purple-500">
            <StarSvg height={13} width={13} />
          </span>
        </button>
      </header>

      {/* main content */}
      <div className="flex w-full grow flex-col pb-[82px] pt-3">
        {/* banner */}
        <div className="flex h-[115px] justify-center">
          <Image
            alt="banner"
            src={"/images/banner.png"}
            width={1000}
            height={1000}
            className="size-full cursor-pointer rounded-xl transition-all hover:opacity-70"
          />
        </div>

        {/* icon and balance */}
        <div className="h-200 flex flex-col items-center gap-6 py-6">
          <Image alt="logo" src={"/images/logo.png"} width={96} height={85} />
          <p className="text text-[28px] font-bold">10,190 DUCKS</p>
        </div>

        {/* community items */}
        <div className="space-y-3 rounded-2xl bg-zinc-900 p-4">
          <p className="text-xl font-bold">DUCK Community</p>
          <CommunityItem lable="Join DuckCoop Channel (+2,500 DUCKS)" />
          <CommunityItem lable="Join DuckCoop Community (+2,500 DUCKS)" />
        </div>

        {/* rewards */}
        <div className="mt-4 space-y-2">
          <p className="mb-1 text-base font-medium">Your Rewards</p>
          <Reward icon={<CalenderSvg />} lable="Account Age" amount="+10,190 DUCKS" />
          <Reward icon={<TickSvg />} lable="Telegram Premium" amount="+0 DUCKS" />
          <Reward icon={<PeopleSvg />} lable="Invited Friends" amount="+0 DUCKS" />
        </div>
      </div>
    </main>
  );
}
