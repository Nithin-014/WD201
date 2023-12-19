const createTodoList = () => {
  const tasks = [];
  
  const addTask = (newTask) => {
    tasks.push(newTask);
  };

  const markTaskAsComplete = (index) => {
    tasks[index].isCompleted = true;
  };

  const getOverdueTasks = () => {
    const currentDate = new Date();
    return tasks.filter((task) => new Date(task.dueDate) < currentDate);
  };

  const getTasksDueToday = () => {
    const todayDate = new Date().toISOString().split('T')[0];
    return tasks.filter((task) => {
      const taskDueDate = new Date(task.dueDate).toISOString().split('T')[0];
      return taskDueDate === todayDate;
    });
  };

  const getTasksDueLater = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    return tasks.filter((task) => {
      const taskDueDate = new Date(task.dueDate).toISOString().split('T')[0];
      return new Date(taskDueDate) > new Date(currentDate);
    });
  };

  const formatTasksForDisplay = (taskList) => {
    const currentDateString = new Date().toISOString().split('T')[0];
    let formattedOutput = '';

    taskList.forEach((task) => {
      if (task.dueDate === currentDateString) {
        const isCompletedOnSameDate = task.isCompleted && task.dueDate === currentDateString;
        formattedOutput += `[${isCompletedOnSameDate ? 'x' : ' '}] ${task.title}\n`;
      } else if (task.dueDate < currentDateString) {
        formattedOutput += `[ ] ${task.title} ${task.dueDate}\n`;
      } else {
        formattedOutput += `[ ] ${task.title} ${task.dueDate}\n`;
      }
    });

    return formattedOutput.trim();
  };

  return {
    tasks,
    addTask,
    markTaskAsComplete,
    getOverdueTasks,
    getTasksDueToday,
    getTasksDueLater,
    formatTasksForDisplay,
  };
};

module.exports = createTodoList;
