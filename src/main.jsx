import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ChatDetail from './pages/ChatDetail';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to="/" />
      // },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/chat/infor',
        element: <ChatDetail />
      },
      {
        path: '/chat/:id',
        element: <Home />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
