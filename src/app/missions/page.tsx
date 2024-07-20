import CompletedTask from "@/components/missions/completed-task";
import Task from "@/components/missions/task";
import TaskList from "@/components/missions/task-list";

const Missions = () => {
  return (
    <main className="flex min-h-full w-full max-w-screen-md flex-col px-3 pb-[82px] pt-3">
      {/* title */}
      <p className="mb-4 text-center max-w-[300px] mx-auto text-2xl font-bold leading-[133.333%]">
        Complete tasks to earn more DUCKS
      </p>

      {/* tasks */}
      <div className="px-4 flex flex-col gap-4">
      <TaskList lable="Uniswap" icon="/images/logo.png">
        <Task lable="Dex" icon="/images/logo.png" reward={2000} />
        <Task lable="Dex" icon="/images/logo.png" reward={2000} />
        <CompletedTask lable="Dex" icon="/images/logo.png" />
      </TaskList>
      <TaskList lable="Uniswap" icon="/images/logo.png">
      <CompletedTask lable="Dex" icon="/images/logo.png" />
      </TaskList>
      <TaskList lable="Uniswap" icon="/images/logo.png">
        <Task lable="Dex" icon="/images/logo.png" reward={2000} />
        <CompletedTask lable="Dex" icon="/images/logo.png" />
        <Task lable="Dex" icon="/images/logo.png" reward={2000} />
      </TaskList>
      <TaskList lable="Uniswap" icon="/images/logo.png">
        <Task lable="Dex" icon="/images/logo.png" reward={2000} />
        <Task lable="Dex" icon="/images/logo.png" reward={2000} />
      </TaskList>
      </div>
    </main>
  );
};

export default Missions;
