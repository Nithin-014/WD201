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
  const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  console.log('Current Date:', currentDate);
  const todayItems = all.filter((item) => {
      const dueDate = new Date(item.dueDate).toISOString().split('T')[0]; // Convert item's due date to the same format
      return dueDate === currentDate;
  });
  console.log('Items Due Today:', todayItems);
  return todayItems;
};

const dueLater = () => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  console.log('Current Date:', currentDate);
  const laterItems = all.filter((item) => {
      const dueDate = new Date(item.dueDate).toISOString().split('T')[0]; // Convert item's due date to the same format
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
  
    return output.trim(); // Trims extra spaces at the beginning and end
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

// const todos = todoList();

// const formattedDate = d => {
//   return d.toISOString().split("T")[0]
// }

// var dateToday = new Date()
// const today = formattedDate(dateToday)
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// )
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// )

// todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
// todos.add({ title: 'Pay rent', dueDate: today, completed: true })
// todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
// todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
// todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

// console.log("My Todo-list\n")

// console.log("Overdue")
// var overdues = todos.overdue()
// var formattedOverdues = todos.toDisplayableList(overdues)
// console.log(formattedOverdues)
// console.log("\n")

// console.log("Due Today")
// let itemsDueToday = todos.dueToday()
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
// console.log(formattedItemsDueToday)
// console.log("\n")

// console.log("Due Later")
// let itemsDueLater = todos.dueLater()
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
// console.log(formattedItemsDueLater)
// console.log("\n\n")
