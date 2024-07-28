import ArrowRightSvg from "@/components/svgs/arrow-right.svg";
import TickSvg from "@/components/svgs/tick.svg";
import { useUserContext } from "@/contexts/user-context";
import { Exchange as ExchangeType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Exchange = ({ exchange, forceUpdate }: { exchange: ExchangeType; forceUpdate: () => void }) => {
  const [user, setUser] = useUserContext();
  const [isFetching, setIsFetching] = useState(false);
  const isCurrentExchange = exchange.exchangeId === user.exchange?.exchangeId;
  const router = useRouter();

  const changeExchange = async () => {
    setIsFetching(true);
    try {
      await toast.promise(
        async () => {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exchanges`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              exchangeId: exchange.exchangeId,
            }),
          });
          if (!res.ok) throw new Error();
        },
        {
          pending: "Changing exchange...",
          success: "Exchange changed successfully",
          error: "Failed to change exchange",
        },
        { autoClose: 4000 },
      );
      user.exchange = exchange;
      setUser(user);
      forceUpdate();
    } finally {
      setIsFetching(false);
    }
  };

  const handleClick = () => {
    if (!isCurrentExchange) changeExchange();
    router.push("/");
  };

  return (
    <button
      className="flex w-full items-center justify-between rounded-lg border border-[#27272a] bg-secondary px-3 py-2.5"
      onClick={handleClick}
      disabled={isFetching}
    >
      <div className="flex items-center gap-2.5">
        <Image
          alt={exchange.name}
          src={`/images/exchanges/${exchange.icon}`}
          width={88}
          height={88}
          className="size-11"
        />
        <p className="">{exchange.name}</p>
      </div>
      {isCurrentExchange ? <TickSvg className="text-[#22c55e]" /> : <ArrowRightSvg />}
    </button>
  );
};

export default Exchange;
