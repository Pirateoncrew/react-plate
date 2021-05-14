import App from "./app";
import Home from "./pages/home.page";

const Routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
    ],
  },
];

export default Routes;
