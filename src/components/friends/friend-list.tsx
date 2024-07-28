"use client";

import { useUserContext } from "@/contexts/user-context";
import Friend from "./friend";

const FriendList = () => {
  const [user] = useUserContext();
  return (
    <div className="my-6 mb-[72px] flex flex-col space-y-3">
      <p className="text-base">{user.friends.length} Friend</p>
      <div className="space-y-2">
        {user.friends.map((friend, index) => (
          <Friend name={friend.name} balance={friend.balance} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
