import FriendList from "@/components/friends/friend-list";
import InviteButton from "@/components/friends/invite-button";
import Image from "next/image";

const Friends = () => {
  return (
    <main className="relative flex min-h-full w-full max-w-screen-md flex-col px-3 pb-[82px] pt-3">
      {/* title */}
      <div className="py-6">
        <p className="text-center text-2xl font-bold">Invite friends</p>
        <p className="text-center text-2xl font-bold">and get more DUCK</p>
      </div>

      {/* logo */}
      <div className="flex flex-col items-center gap-6">
        <Image alt="icon" src={"/images/logo.png"} width={180} height={158} />
        <p className="text-center text-base text-zinc-400">Tap on the button to invite your friends</p>
      </div>

      {/* friends */}
      <FriendList />

      {/* invite button */}
      <InviteButton />
    </main>
  );
};

export default Friends;
