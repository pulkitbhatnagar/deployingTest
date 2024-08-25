import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Form from "./Form";
import UserList from "./UserList";

export const router = createBrowserRouter([
  {
    path: "/user/new",
    element: <Form/>,
  },
  {
    path: "/user/list",
    element: <UserList/>,
  },
]);

