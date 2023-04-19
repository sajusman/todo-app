import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import "./global.css";
import TaskList from "./feature/Task/TaskList";
import CreateTask from "./feature/Task/CreateTask";
import Layout from "./ui/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tasks",
    element: <TaskList />,
  },
  {
    path: "/tasks/add",
    element: <CreateTask />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
