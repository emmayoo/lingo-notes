import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./components/Header.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
}

export default App;
