import Image from "next/image";

const TaskList = ({ icon, lable, children }: { icon: string; lable: string; children: React.ReactNode }) => {
  return (
    <div className="space-y-3 rounded-lg border border-[#27272a] bg-secondary px-3 py-2.5">
      <div className="flex items-center gap-1">
        <Image alt="icon" src={icon} width={1000} height={1000} className="size-10" />
        <p className="text-base font-bold">{lable}</p>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default TaskList;
