const createTodoList = () => {
    const todoItems = [];

    const addTodo = (title, dueDate) => {
        const newTodo = {
            title,
            completed: false,
            dueDate,
        };
        todoItems.push(newTodo);
    };

    const markAsComplete = (index) => {
        if (index >= 0 && index < todoItems.length) {
            todoItems[index].completed = true;
        } else {
            throw new Error('Invalid index');
        }
    };

    const getOverdueTodos = () => {
        const today = new Date().toISOString().split('T')[0];
        return todoItems.filter((item) => new Date(item.dueDate) < new Date(today));
    };

    const getDueTodayTodos = () => {
        const today = new Date().toISOString().split('T')[0];
        return todoItems.filter((item) => new Date(item.dueDate).toISOString().split('T')[0] === today);
    };

    const getDueLaterTodos = () => {
        const today = new Date().toISOString().split('T')[0];
        return todoItems.filter((item) => new Date(item.dueDate) > new Date(today));
    };

    const displayTodos = (list) => {
        let output = '';
        if (list.length === 0) {
            return '';
        }

        for (const item of list) {
            output += `[${item.completed ? 'x' : ' '}] ${item.title}`;
            if (item.dueDate !== today) {
                output += ` ${formattedDate(new Date(item.dueDate))}`;
            }
            output += '\n';
        }

        return output.trim();
    };

    return {
        addTodo,
        markAsComplete,
        getOverdueTodos,
        getDueTodayTodos,
        getDueLaterTodos,
        displayTodos,
    };
};

module.exports = createTodoList;
