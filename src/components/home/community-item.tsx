import { useUserContext } from "@/contexts/user-context";
import { Task } from "@/types";
import WebApp from "@twa-dev/sdk";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import TickSvg from "../svgs/tick.svg";

const CommunityItem = ({ task, forceUpdate }: { task: Task; forceUpdate: () => void }) => {
  const [user, setUser] = useUserContext();
  const [isFetching, setIsFetching] = useState(false);
  const index = user.taskCategories[0].tasks.findIndex((t) => t.taskId === task.taskId);

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
          taskId: task.taskId,
        }),
      });
      if (!res.ok) throw new Error();

      user.taskCategories[0].tasks[index].completed = true;
      user.balance += task.reward;
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
    if (!task.completed && !isFetching) completetask();
    WebApp.openTelegramLink(task.condition);
  };

  return (
    <div className="flex flex-col space-y-3" onClick={handleClick}>
      <p className="text-sm text-zinc-400">
        {task.name} {`(+${task.reward} DUCKS)`}
      </p>
      <div className="flex justify-between">
        <div className="group flex cursor-pointer items-center gap-2">
          <Image alt="external-link" src={"/icons/external-link.png"} width={40} height={40} className="size-8" />
          <p className="text-base transition-all group-hover:text-primary-500">Join Now</p>
        </div>
        {!task.completed ? (
          <button
            disabled={isFetching}
            className="h-8 rounded-full bg-primary-500 px-3 py-1 text-sm font-medium text-black transition-[all_0.2s_cubic-bezier(0.645,0.045,0.355,1)] active:scale-90 disabled:bg-primary-600 disabled:text-zinc-500"
          >
            Check
          </button>
        ) : (
          <TickSvg className="text-[#22c55e]" />
        )}
      </div>
    </div>
  );
};

export default CommunityItem;
