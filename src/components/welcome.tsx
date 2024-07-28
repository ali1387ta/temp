"use client";

import { useUserContext } from "@/contexts/user-context";
import { calculateAge, calculateDate } from "@/lib/calulate-account-age";
import { User } from "@/types";
import { formatNumber } from "@/utils/format-number";
import Image from "next/image";
import { useState } from "react";

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState(1);
  const [user] = useUserContext();

  const handleClick = () => {
    if (currentTab === 1) setCurrentTab(2);
    else setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="absolute z-10 flex size-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-6">
        <Image
          alt="bg"
          src={"/images/welcome-bg.png"}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 h-[100vh] w-screen"
        />
        <Image
          alt="bg"
          src={"/images/welcome-bg.png"}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[85vh] h-[80vh] w-screen"
        />
        {currentTab === 1 ? (
          <Tab1 user={user} handleClick={handleClick} />
        ) : (
          <Tab2 user={user} handleClick={handleClick} />
        )}
      </div>
    )
  );
};

export default Welcome;

function Tab1({ user, handleClick }: { user: User; handleClick: () => void }) {
  const accountAge = Math.round(calculateAge(calculateDate(parseInt(user.telegramId)))) || 1;

  return (
    <>
      <div className="z-20 flex grow flex-col items-center justify-center gap-3">
        <p className="text-2xl font-bold">Communicator member!</p>
        <Image
          alt="number"
          src={`/images/numbers/${accountAge}.png`}
          width={250}
          height={115}
          className="h-[115px] w-auto"
        />
        <p className="text-2xl font-medium">Years ago</p>
      </div>
      <div className="z-20 flex w-full flex-col items-center">
        <p className="text-base text-zinc-400">You’ve joined Telegram.</p>
        <p className="text-base text-zinc-400">
          Your account number is <span className="text-white">#{user.telegramId}</span>
        </p>
        <button className="mt-6 w-full rounded-full bg-[#6c9ee4] py-2 text-lg text-black" onClick={handleClick}>
          Continue
        </button>
      </div>
    </>
  );
}

function Tab2({ user, handleClick }: { user: User; handleClick: () => void }) {
  return (
    <>
      <div className="z-20 flex grow flex-col items-center justify-center gap-3">
        <p className="mb-10 text-2xl font-bold">Here is your reward!</p>
        <p className="text-4xl font-bold">{formatNumber(user.rewards.accountAge)}</p>
      </div>
      <div className="z-20 flex w-full flex-col items-center">
        <p className="text-base">Thanks for your time on Telegram.</p>
        <button className="mt-6 w-full rounded-full bg-primary-500 py-2 text-lg text-black" onClick={handleClick}>
          Ok
        </button>
      </div>
    </>
  );
}
