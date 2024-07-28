import TaskCategories from "@/components/missions/task-categories";

const Missions = () => {
  return (
    <main className="flex min-h-full w-full max-w-screen-md flex-col px-3 pb-[82px] pt-3">
      {/* title */}
      <p className="mx-auto mb-4 max-w-[300px] text-center text-2xl font-bold leading-[133.333%]">
        Complete tasks to earn more DUCKS
      </p>

      {/* tasks */}
      <TaskCategories />
    </main>
  );
};

export default Missions;
