describe("Tests for TodoList Operations", () => {
  let todoList;

  beforeEach(() => {
    todoList = initializeTodoList();
  });

  test("Adding a New Todo", () => {
    const newTodo = { title: "Buy groceries", dueDate: '2023-12-15' };
    todoList.add(newTodo);
    expect(todoList.all.length).toBe(1);
    expect(todoList.all[0]).toEqual(newTodo);
  });

  test("Marking a Todo as Completed", () => {
    const unfinishedTodo = { title: 'Finish report', dueDate: '2023-12-14', completed: false };
    todoList.add(unfinishedTodo);
    todoList.markAsComplete(0);

    expect(todoList.all[0].completed).toBe(true);
  });

  test("Retrieval of Overdue Items", () => {
    const overdueTask = { title: 'Pay bills', dueDate: '2023-12-12', completed: false };
    todoList.add(overdueTask);
    const overdueItems = todoList.overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0]).toEqual(overdueTask);
  });

  test("Retrieval of Items Due Today", () => {
    const todayTask = { title: 'Clean room', dueDate: '2023-12-19', completed: false };
    todoList.add(todayTask);

    const todayItems = todoList.dueToday();

    expect(todayItems.length).toBe(1);
    expect(todayItems[0]).toEqual(todayTask);
  });

  test("Retrieval of Items Due Later", () => {
    const futureTask = { title: 'Call dentist', dueDate: '2023-12-20', completed: false };
    todoList.add(futureTask);

    const laterItems = todoList.dueLater();

    expect(laterItems.length).toBe(1);
    expect(laterItems[0]).toEqual(futureTask);
  });
});
