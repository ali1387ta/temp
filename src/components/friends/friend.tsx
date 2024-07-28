import Image from "next/image";

const Friend = ({ photo, name, balance }: { photo?: string | null; name: string; balance: string }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#27272a] bg-secondary px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <Image
          alt="profile"
          src={photo ? photo : "/images/logo.png"}
          width={88}
          height={88}
          className="size-11 rounded-full object-cover"
        />
        <p className="line-clamp-1 text-ellipsis break-all text-base">{name}</p>
      </div>
      <p className="text-base font-medium">{balance} DUCKS</p>
    </div>
  );
};

export default Friend;
