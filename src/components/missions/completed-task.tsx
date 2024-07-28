import Image from "next/image";
import TickSvg from "../svgs/tick.svg";

const CompletedTask = ({ icon, lable }: { icon: string; lable: string }) => {
  return (
    <div className="space-y-3 rounded-lg border border-zinc-900 bg-zinc-950 p-3">
      <div className="flex items-center justify-between">
        <div className="flex max-w-[85%] items-center gap-1">
          <Image alt="icon" src={icon} width={64} height={64} className="size-8" />
          <p className="text-sm">{lable}</p>
        </div>
        <TickSvg className="text-[#22c55e]" />
      </div>
    </div>
  );
};

export default CompletedTask;
