import Image from "next/image";
import ArrowRightSvg from "../svgs/arrow-right.svg";

const Task = ({ icon, lable, reward }: { icon: string; lable: string; reward: number }) => {
  return (
    <div className="space-y-3 rounded-lg border border-zinc-900 bg-zinc-950 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image alt="icon" src={icon} width={1000} height={1000} className="size-8" />
          <p className="text-sm">{lable}</p>
        </div>
        <button className="flex h-8 items-center gap-1 rounded-full bg-primary-500 px-3 text-sm font-medium text-black transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] hover:bg-primary-600 active:scale-95">
          Go
          <ArrowRightSvg width={14} height={14} />
        </button>
      </div>
      <div className="h-px w-full bg-zinc-800"></div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">Reward</p>
        <div className="flex items-center gap-2">
          <Image alt="logo" src="/images/logo.png" width={1000} height={1000} className="size-4" />
          <p className="text-sm font-bold">+{reward} DUCKS</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
