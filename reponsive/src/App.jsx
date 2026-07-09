import { Outlet } from "react-router-dom";
import Navbar from "./ui/layout/Navbar";
import { useSelector } from "react-redux";
export default function App() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={`min-h-screen flex flex-col ${theme} text-white`}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}