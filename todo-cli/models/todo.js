/* eslint-disable no-undef */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      console.log("Overdue");
      // FILL IN HERE
      const overdueTodos = await Todo.overdue();
      overdueTodos.forEach(todo => console.log(todo.displayableString()));
      console.log("\n");

      console.log("Due Today");
      // FILL IN HERE
      const dueTodayTodos = await Todo.dueToday();
      dueTodayTodos.forEach(todo => console.log(todo.displayableString()));
      console.log("\n");

      console.log("Due Later");
      const dueLaterTodos = await Todo.dueLater();
      dueLaterTodos.forEach(todo => console.log(todo.displayableString()));
      // FILL IN HERE
    }

    static async overdue() {
      const currentDate = new Date();
      return await Todo.findAll({
      where: {
        dueDate: {
          [Op.lt]: currentDate,
        },
        completed: false,
        },
      });
      // FILL IN HERE TO RETURN OVERDUE ITEMS
    }

    static async dueToday() {
      const currentDate = new Date();
      return await Todo.findAll({
        where: {
          dueDate: {
            [Op.eq]: currentDate,
          },
          completed: false,
        },
      });
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
    }

    static async dueLater() {
      const currentDate = new Date();
      return await Todo.findAll({
        where: {
          dueDate: {
            [Op.gt]: currentDate,
          },
          completed: false,
        },
      });
      // FILL IN HERE TO RETURN ITEMS DUE LATER
    }

    static async markAsComplete(id) {
      const todo = await Todo.findByPk(id);
      if (todo) {
        todo.completed = true;
        await todo.save();
      } else {
        throw new Error('Todo item not found!');
      }
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE

    }

    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};