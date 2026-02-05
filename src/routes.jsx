import { createBrowserRouter } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import IMC from "./Pages/IMC";
import PiedraPapelTijera from "./Pages/PiedraPapelTijera";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/imc",
    element: <IMC />
  },
  {
    path: "/ppt",
    element: <PiedraPapelTijera />
  }
]);
