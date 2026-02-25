import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BoardViewPage from "./pages/BoardViewPage";
import CalendarViewPage from "./pages/CalendarViewPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<BoardViewPage />} />
          <Route path="/calendar" element={<CalendarViewPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
