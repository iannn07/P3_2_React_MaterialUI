import { createBrowserRouter } from "react-router-dom";
import Movies from "./pages/movies/movies";
import Home from "./pages/home/home";
import Error from "./pages/error/error";
import Series from "./pages/series";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movies />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <Series />,
    errorElement: <Error />,
  },
  {
    path: "/bookmarks",
    element: <Bookmark />,
    errorElement: <Error />,
  },
]);
