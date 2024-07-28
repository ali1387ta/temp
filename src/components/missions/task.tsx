import Image from "next/image";
import ArrowRightSvg from "../svgs/arrow-right.svg";
import { DispatchWithoutAction, useState } from "react";
import { useUserContext } from "@/contexts/user-context";
import { toast } from "react-toastify";
import WebApp from "@twa-dev/sdk";

const Task = ({
  id,
  condition,
  icon,
  lable,
  reward,
  forceUpdate,
}: {
  id: number;
  condition: string;
  icon: string;
  lable: string;
  reward: number;
  forceUpdate: DispatchWithoutAction;
}) => {
  const [user, setUser] = useUserContext();
  const [isFetching, setIsFetching] = useState(false);
  const categoryIndex = user.taskCategories.findIndex((category) => category.tasks.find((task) => task.taskId === id));
  const taskIndex = user.taskCategories[categoryIndex].tasks.findIndex((task) => task.taskId === id);

  const completetask = async () => {
    try {
      setIsFetching(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          taskId: id,
        }),
      });
      if (!res.ok) throw new Error();

      user.taskCategories[categoryIndex].tasks[taskIndex].completed = true;
      user.balance += reward;
      setUser(user);
      forceUpdate();
      toast.success("Successfully completed task");
    } catch (err) {
      toast.error("Failed to complete task");
    } finally {
      setIsFetching(false);
    }
  };

  const handleClick = () => {
    completetask();
    if (condition.startsWith("https://t.me")) WebApp.openTelegramLink(condition);
    else WebApp.openLink(condition);
  };

  return (
    <div className="space-y-3 rounded-lg border border-zinc-900 bg-zinc-950 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image alt="icon" src={icon} width={1000} height={1000} className="size-8" />
          <p className="text-sm">{lable}</p>
        </div>
        <button
          onClick={handleClick}
          disabled={isFetching}
          className="flex h-8 items-center gap-1 rounded-full bg-primary-500 px-3 text-sm font-medium text-black transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] hover:bg-primary-600 active:scale-95 disabled:bg-primary-600"
        >
          Go
          <ArrowRightSvg width={14} height={14} />
        </button>
      </div>
      <div className="h-px w-full bg-zinc-800"></div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">Reward</p>
        <div className="flex items-center gap-2">
          <Image alt="logo" src="/images/logo.png" width={1000} height={1000} className="size-4" />
          <p className="text-sm font-bold">+{reward} DUCKS</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
