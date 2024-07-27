import { formatNumber } from "@/utils/format-number";

const Reward = ({ icon, lable, amount }: { icon: React.ReactElement; lable: string; amount: number }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#27272a] bg-secondary px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="flex size-11 items-center justify-center rounded-full bg-zinc-800">{icon}</div>
        <p className="text-base">{lable}</p>
      </div>
      <div className="text-base font-medium">+{formatNumber(amount)} DUCKS</div>
    </div>
  );
};

export default Reward;
