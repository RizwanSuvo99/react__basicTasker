import { useState } from "react";
import SearchTask from "./SearchTask/SearchTask";
import TaskActions from "./TaskActions.jsx/TaskActions";
import TaskLists from "./TaskLists/TaskLists";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to Learn React such that I can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "high",
    isFavourite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const handleAddTask = () => {
    console.log("New task added....");
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={handleAddTask} />
          <TaskLists tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
