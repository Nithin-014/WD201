/* eslint-disable no-undef */
const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    const currentDate = new Date();
    return all.filter((item) => new Date(item.dueDate) < currentDate);
};

const dueToday = () => {
  const currentDate = new Date().toISOString().split('T')[0]; 
  console.log('Current Date:', currentDate);
  const todayItems = all.filter((item) => {
      const dueDate = new Date(item.dueDate).toISOString().split('T')[0];
      return dueDate === currentDate;
  });
  console.log('Items Due Today:', todayItems);
  return todayItems;
};

const dueLater = () => {
  const currentDate = new Date().toISOString().split('T')[0]; 
  console.log('Current Date:', currentDate);
  const laterItems = all.filter((item) => {
      const dueDate = new Date(item.dueDate).toISOString().split('T')[0]; 
      return new Date(dueDate) > new Date(currentDate);
  });
  console.log('Items Due Later:', laterItems);
  return laterItems;
};



  const toDisplayableList = (list) => {
    const currentDate = new Date().toISOString().split("T")[0];
    let output = "";
  
    list.forEach((item) => {
      if (item.dueDate === currentDate) {
        const completedOnSameDate = item.completed && item.dueDate === currentDate;
        output += `[${completedOnSameDate ? 'x' : ' '}] ${item.title}\n`;
      } else if (item.dueDate < currentDate) {
        output += `[ ] ${item.title} ${item.dueDate}\n`;
      } else {
        output += `[ ] ${item.title} ${item.dueDate}\n`;
      }
    });
  
    return output.trim(); 
  };
  

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

module.exports = todoList;
