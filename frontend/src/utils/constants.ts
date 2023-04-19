export const routes = [
  { displayText: "Create a task", route: "tasks/add" },
  { displayText: "View tasks", route: "tasks/" },
];

export const headers = [
  "Index",
  "Name",
  "Description",
  "Creation date",
  "Actions",
];

export const BACKEND_API = process.env.BACKEND_API;
