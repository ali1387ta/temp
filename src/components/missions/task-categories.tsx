"use client";

import { useUserContext } from "@/contexts/user-context";
import CompletedTask from "./completed-task";
import Task from "./task";
import TaskCategory from "./task-category";
import { useForceUpdate } from "@/hooks/use-force-update";
import { User } from "@/types";

const TaskCategories = () => {
  const [user] = useUserContext();
  const forceUpdate = useForceUpdate();
  const shifted = JSON.parse(JSON.stringify(user)) as User;
  shifted.taskCategories.shift();

  return (
    <div className="flex flex-col gap-4">
      {shifted.taskCategories.map((category, index) => (
        <TaskCategory lable={category.name} key={index} icon={`/images/task-categories/${category.icon}`}>
          {category.tasks.map((task) => {
            if (task.expired) {
              return null;
            } else if (task.completed) {
              return <CompletedTask lable={task.name} key={task.taskId} icon={`/images/tasks/${task.icon}`} />;
            } else {
              return (
                <Task
                  id={task.taskId}
                  condition={task.condition}
                  lable={task.name}
                  key={task.taskId}
                  icon={`/images/tasks/${task.icon}`}
                  reward={task.reward}
                  forceUpdate={forceUpdate}
                />
              );
            }
          })}
        </TaskCategory>
      ))}
    </div>
  );
};

export default TaskCategories;
