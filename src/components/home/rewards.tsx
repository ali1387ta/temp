"use client";

import CalenderSvg from "../svgs/calender.svg";
import PeopleSvg from "../svgs/people.svg";
import TickSvg from "../svgs/tick.svg";
import Reward from "./reward";
import { useUserContext } from "@/contexts/user-context";

const Rewards = () => {
  const [user] = useUserContext();

  return (
    user && (
      <div className="mt-4 space-y-2">
        <p className="mb-1 text-base font-medium">Your Rewards</p>
        <Reward icon={<CalenderSvg />} lable="Account Age" amount={user.rewards.accountAge} />
        <Reward icon={<TickSvg />} lable="Telegram Premium" amount={user.rewards.telegramPremium} />
        <Reward icon={<PeopleSvg />} lable="Invited Friends" amount={user.rewards.invite} />
      </div>
    )
  );
};

export default Rewards;
