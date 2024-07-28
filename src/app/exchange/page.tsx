import ExchangeList from "@/components/home/change-exchange/exchange-list";
import { Exchange } from "@/types";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const ChangeExchange = async () => {
  let exchanges: Exchange[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exchanges`, { next: { revalidate: 3600 } });
    exchanges = (await res.json()).data as Exchange[];
  } catch (err) {
    toast.error("Failed to fetch exchanges");
    redirect("/");
  }

  return (
    <main className="mb-[82px] flex min-h-full w-full max-w-screen-md flex-col px-3">
      <p className="mx-auto my-5 text-center text-2xl font-bold leading-[133.333%]">Choose Exchange</p>
      <ExchangeList exchanges={exchanges} />
    </main>
  );
};

export default ChangeExchange;
