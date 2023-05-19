import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './pages/Projects.jsx';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/projects",
//     element: <Projects />
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
