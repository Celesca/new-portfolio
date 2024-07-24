import React from 'react'
import ReactDOM from 'react-dom/client'
import BookPage from './pages/BookPage/BookPage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import HomePage from './pages/HomePage/HomePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book",
    element: <BookPage />,
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)}