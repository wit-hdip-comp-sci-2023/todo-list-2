import { todoListStore } from "../models/todo-list-store.js";

export const dashboardController = {
  async index(request, response) {
    const viewData = {
      title: "Template 2 Dashboard",
      todolist: await todoListStore.getAllTodos(),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addTodo(request, response) {
    const todo = {
      title: request.body.title,
    };
    await todoListStore.addTodo(todo);
    console.log(`Adding ${todo.title}`);
    response.redirect("/dashboard");
  },

  async deleteTodo(request, response) {
    const todoId = request.params.id;
    await todoListStore.deleteTodo(todoId);
    console.log(`Deleting todo ${todoId}`);
    response.redirect("/dashboard");
  },
};
