import React from 'react'
import ReactDOM from 'react-dom/client'
import BookPage from './pages/BookPage/BookPage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import HomePage from './pages/HomePage/HomePage.tsx'
import ContactPage from './pages/ContactPage/ContactPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book",
    element: <BookPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
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