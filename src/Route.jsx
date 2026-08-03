import { createBrowserRouter } from "react-router";
import Layout from "./layoute/Layout";
import Blog from "./Camponents/Header/Blog";
import Contactus from "./Camponents/Header/Contactus";
import Dictionary from "./Camponents/Header/Dictionary";
import Mian from "./Camponents/Header/Mian";
import Shop from "./Camponents/Header/Shop";
import Aboutus from "./Camponents/Header/Aboutus";
import Cofeecategory from "./Camponents/Header/Cofeecategory";
import MainItems from "./Camponents/Main/MainItems";
import Panellayout from "./Camponents/panel/Panellayout";
import Panelmain from "./Camponents/panel/panelcomponent/Panelmain";
import Panelitems from "./Camponents/panel/panelcomponent/Panelitems";
import Panelcoment from "./Camponents/panel/panelcomponent/Panelcoment";
import Panelusers from "./Camponents/panel/panelcomponent/Panelusers";
import Panelticket from "./Camponents/panel/panelcomponent/Panelticket";
import Panel from "./Camponents/panel/Panel";
import Login from "./LoginForm/Login";
import Train from "./Camponents/Train";
import Register from "./RegisterForm/Register";
import Routprotection from "./Routprotection";
import Contact from "./Camponents/Main/Contact";
import TicketUs from "./Camponents/Main/TicketUs";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainItems />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [{ path: ":category", element: <Cofeecategory /> }],
      },
      {
        path: "dic",
        element: <Dictionary />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "aboutUs",
        element: <Aboutus />,
      },
      {
        path: "contactUs",
        element: <Contactus />,
      },
    ],
  },
  ////
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Train",
    element: <Train />,
  },
  {
    path: "Ticket",
    element: <TicketUs />,
  },
  //////
  {
    path: "/",
    element: (
      <Routprotection>
        <Panellayout />
      </Routprotection>
    ),
    children: [
      {
        path: "panel",
        element: <Panelmain />,
      },
      { path: "panel/products", element: <Panelitems /> },
      { path: "panel/users", element: <Panelusers /> },
      { path: "panel/tickets", element: <Panelticket /> },
      { path: "panel/comments", element: <Panelcoment /> },
    ],
  },
]);

export default route;
