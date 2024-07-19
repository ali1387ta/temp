import Image from "next/image";

const CommunityItem = ({ lable }: { lable: string }) => {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm text-zinc-400">{lable}</p>
      <div className="flex justify-between">
        <div className="group flex cursor-pointer items-center gap-2">
          <Image alt="external-link" src={"/icons/external-link.png"} width={40} height={40} className="size-8" />
          <p className="group-hover:text-primary-500 text-base transition-all">Join Now</p>
        </div>
        <button className="bg-primary-500 h-8 rounded-full px-3 py-1 text-sm font-medium text-black transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] active:scale-90 disabled:text-zinc-500">
          Check
        </button>
      </div>
    </div>
  );
};

export default CommunityItem;
