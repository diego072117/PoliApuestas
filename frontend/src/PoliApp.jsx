import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const PoliApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
