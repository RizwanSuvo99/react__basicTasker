import { useState } from "react";
import SearchTask from "./SearchTask/SearchTask";
import TaskActions from "./TaskActions.jsx/TaskActions";
import TaskLists from "./TaskLists/TaskLists";
import AddTaskModal from "./AddTaskModal/AddTaskModal";
import NoTaskFound from "./NoTaskFound/NoTaskFound";

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
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        }
        return task;
      });
      setTasks([...updatedTasks]);
    }
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks([...filteredTasks]);
  };

  const handleDeleteAllClick = () => {
    setTasks([]);
  };

  const handleFavourite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite;
    setTasks([...newTasks]);
  };

  const handleSearch = (searchTerm) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filteredTasks]);
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          onCloseClick={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onDeleteAllClick={handleDeleteAllClick}
            onAddClick={() => setShowAddModal(true)}
          />
          {tasks.length > 0 ? (
            <TaskLists
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavourite}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
