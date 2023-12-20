const todoList = require('../todo'); // Import your todo list module
const today = new Date().toLocaleDateString("en-CA");
const tomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24).toLocaleDateString("en-CA");
const overdueDate = '2023-12-15';
const laterDate = '2025-11-19';

describe("TodoList Test Suite", () => {
    let todoInstance;

    beforeEach(() => {
        // Create a new instance of the todo list before each test
        todoInstance = todoList();
    });

    test("Should add new todo", () => {
        const todoItemsCount = todoInstance.all.length;
        todoInstance.add({
            title: "Test todo",
            completed: false,
            dueDate: today,
        });
        expect(todoInstance.all.length).toBe(todoItemsCount + 1);
    });

    test("Should mark a todo as complete", () => {
        todoInstance.add({
            title: "Test todo",
            completed: false,
            dueDate: today,
        });

        expect(todoInstance.all[0].completed).toBe(false);
        todoInstance.markAsComplete(0);
        expect(todoInstance.all[0].completed).toBe(true);
    });

    test('Should identify overdue todo item', () => {
        const overdueTodo = { title: 'Pay bills', dueDate: overdueDate, completed: false };
        todoInstance.add(overdueTodo);
        const overdueItems = todoInstance.overdue();
        expect(overdueItems.length).toBe(1);
        expect(overdueItems[0]).toEqual(overdueTodo);
    });

    test("Should retrieve due today items", () => {
        todoInstance.add({
            title: "Test todo",
            completed: false,
            dueDate: today,
        });
        const dueTodayItems = todoInstance.dueToday();
        expect(dueTodayItems.length).toBeGreaterThan(0);
        // Add more specific assertions based on your implementation
    });

    test("Should retrieve due later items", () => {
        const dueLaterTodo = { title: 'Call dentist', dueDate: laterDate, completed: false };
        todoInstance.add(dueLaterTodo);
        const dueLaterItems = todoInstance.dueLater();
        expect(dueLaterItems.length).toBe(1);
        expect(dueLaterItems[0]).toEqual(dueLaterTodo);
    });
});
