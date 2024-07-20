"use client";

import CopySvg from "@/components/svgs/copy.svg";
import Image from "next/image";
import { toast } from "react-toastify";

const Friends = () => {
  const copy = () => {
    toast.success(
      <div>
        <p className="text-sm font-bold capitalize">Success</p>
        <p className="text-xs font-medium text-[#C8C5C5]">Copy to clipboard successfully</p>
      </div>,
      { theme: "dark" },
    );
  };

  return (
    <main className="relative flex min-h-full w-full max-w-screen-md flex-col px-3 pb-[82px] pt-3">
      {/* title */}
      <div className="py-6">
        <p className="text-center text-2xl font-bold">Invite friends</p>
        <p className="text-center text-2xl font-bold">and get more DUCK</p>
      </div>

      {/* logo */}
      <div className="flex flex-col items-center gap-6">
        <Image alt="icon" src={"/images/logo.png"} width={180} height={158} />
        <p className="text-center text-base text-zinc-400">Tap on the button to invite your friends</p>
      </div>

      {/* invite button */}
      <div className="fixed bottom-[82px] flex w-full items-center gap-2 px-4 pb-4 max-w-screen-md">
        <button className="bg-primary-500 hover:bg-primary-600 h-12 grow rounded-full text-lg font-medium text-black transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] active:scale-95">
          Invite friends
        </button>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] active:scale-95"
          onClick={copy}
        >
          <CopySvg />
        </button>
      </div>
    </main>
  );
};

export default Friends;
