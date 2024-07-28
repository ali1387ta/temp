"use client";

import { useUserContext } from "@/contexts/user-context";
import CommunityItem from "./community-item";
import { useForceUpdate } from "@/hooks/use-force-update";

const CommunityItemList = () => {
  const [user] = useUserContext();
  const forceUpdate = useForceUpdate();

  return (
    <div className="space-y-3 rounded-2xl bg-zinc-900 p-4">
      <p className="text-xl font-bold">DUCK Community</p>
      {user.taskCategories[0].tasks.map((task, index) => (
        <CommunityItem task={task} key={index} forceUpdate={forceUpdate} />
      ))}
    </div>
  );
};

export default CommunityItemList;
