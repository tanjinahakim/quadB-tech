import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ShowDetails from './components/ShowDetails/ShowDetails';
import BookedTicket from './components/BookedTicket/BookedTicket';
import Show from './components/Show/Show';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
  },
  {
    path:'/shows',
    element:<Show></Show>
  },
  {
    path:'/showDetails/:id',
    element:<ShowDetails></ShowDetails>,
    loader:({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
  },
  {
    path:'/bookedTicket/:id',
    element:<BookedTicket></BookedTicket>,
    loader:({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container-fluid'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
