"use client";

import { toast } from "react-toastify";
import CopySvg from "../svgs/copy.svg";
import { useUserContext } from "@/contexts/user-context";
import WebApp from "@twa-dev/sdk";

const InviteButton = () => {
  const [user] = useUserContext();
  const link = `https://t.me/${process.env.NEXT_PUBLIC_BOT_UESR_NAME}/${process.env.NEXT_PUBLIC_WEB_APP_NAME}?startapp=${user.userId}`;

  const copy = () => {
    navigator.clipboard.writeText(link);
    toast.success(
      <div>
        <p className="text-sm font-bold capitalize">Success</p>
        <p className="text-xs font-medium text-[#C8C5C5]">Copy to clipboard successfully</p>
      </div>,
    );
  };

  const invite = () => {
    console.log(encodeURI(`/share/url?text=Let's play DUCKS&url=${link}`));
    WebApp.openTelegramLink(encodeURI(`https://t.me/share/url?text=Let's play DUCKS&url=${link}`));
  };

  return (
    <div className="fixed bottom-[82px] left-0 flex w-full max-w-screen-md items-center gap-2 px-4 pb-2">
      <button
        className="h-12 grow rounded-full bg-primary-500 text-lg font-medium text-black transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] hover:bg-primary-600 active:scale-95"
        onClick={invite}
      >
        Invite friends
      </button>
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] active:scale-95"
        onClick={copy}
      >
        <CopySvg />
      </button>
    </div>
  );
};

export default InviteButton;
