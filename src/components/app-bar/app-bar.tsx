import AppBarItem from "./app-bar-item";
import LeaderboardSvg from "../svgs/leader-board.svg";
import HomeSvg from "../svgs/home.svg";
import MissionsSvg from "../svgs/missions.svg";
import FriendsSvg from "../svgs/friends.svg";

const AppBar = () => {
  return (
    <nav className="bg- fixed bottom-0 flex h-[72px] w-full max-w-screen-md bg-secondary">
      <AppBarItem icon={<HomeSvg />} lable="Home" href="/" />
      <AppBarItem icon={<LeaderboardSvg />} lable="Leaderboard" href="/leaderboard" />
      {/* <AppBarItem icon={<LaunchPoolSvg />} lable="Launchpool" href="/launchpool" /> */}
      <AppBarItem icon={<MissionsSvg />} lable="Earns" href="/missions" />
      <AppBarItem icon={<FriendsSvg />} lable="Friends" href="/friends" />
    </nav>
  );
};

export default AppBar;
