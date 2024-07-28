import Balance from "@/components/home/balance";
import CommunityItemList from "@/components/home/community-item-list";
import Rewards from "@/components/home/rewards";
import KingSvg from "@/components/svgs/king.svg";
import StarSvg from "@/components/svgs/star.svg";
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
          <p className="font-bold group-hover:text-primary-500">&DUMP Price</p>
        </button>
        <button className="group flex items-center gap-2 rounded-3xl border border-[#ffc81280] px-3 py-1">
          <span className="text-primary-500">
            <WorldSvg />
          </span>
          <p className="text-base font-bold transition-all group-hover:text-primary-500">Vote Exchange</p>
          <span className="animate-pulse text-purple-500">
            <StarSvg height={13} width={13} />
          </span>
        </button>
      </header>

      {/* main content */}
      <div className="flex w-full grow flex-col pb-[82px] pt-3">
        {/* banner */}
        <div className="flex max-h-[115px] justify-center">
          <Image
            alt="banner"
            src={"/images/banner.png"}
            width={0}
            height={0}
            sizes="100%"
            className="size-full cursor-pointer rounded-xl transition-all hover:opacity-70"
          />
        </div>

        {/* icon and balance */}
        <div className="h-200 flex flex-col items-center gap-6 py-6">
          <Image alt="logo" src={"/images/logo.png"} width={96} height={85} />
          <Balance />
        </div>

        {/* community items */}
        <CommunityItemList />

        {/* rewards */}
        <Rewards />
      </div>
    </main>
  );
}
