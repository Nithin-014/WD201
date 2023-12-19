const todoList = () => {
  const all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    if (all[index]) {
      all[index].completed = true;
    }
  };

  const overdue = () => {
    const today = new Date();
    return all.filter((item) => new Date(item.dueDate) < today);
  };

  const dueToday = () => {
    const today = new Date();
    const todayDateString = today.toISOString().slice(0, 10);
    return all.filter((item) => item.dueDate === todayDateString);
  };

  const dueLater = () => {
    const today = new Date();
    return all.filter((item) => new Date(item.dueDate) > today);
  };

  const toDisplayableList = (list) => {
    return list.map((item) => {
      const completionStatus = item.completed ? "[x]" : "[ ]";
      const displayedDate =
        item.dueDate === new Date().toISOString().slice(0, 10)
          ? ""
          : ` ${item.dueDate}`;
      return `${completionStatus} ${item.title}${displayedDate}`;
    });
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
