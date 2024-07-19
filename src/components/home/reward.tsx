const Reward = ({ icon, lable, amount }: { icon: React.ReactElement; lable: string; amount: string }) => {
  return (
    <div className="rounded-lg bg-secondary border border-[#27272a] px-3 py-2.5 flex justify-between items-center">
      <div className="flex items-center gap-2.5">
        <div className="bg-zinc-800 rounded-full size-11 flex justify-center items-center">{icon}</div>
        <p className="text-base">{lable}</p>
      </div>
      <div className="text-base font-medium">{amount}</div>
    </div>
  );
};

export default Reward;
