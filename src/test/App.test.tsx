import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BoardViewPage from "../pages/BoardViewPage";
import CalendarViewPage from "../pages/CalendarViewPage";
import SettingsPage from "../pages/SettingsPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("KanbanFlow")).toBeInTheDocument(); });
    it("BoardViewPage renders", () => { wrap(<BoardViewPage />); expect(screen.getByText("Frontend Revamp")).toBeInTheDocument(); });
    it("CalendarViewPage renders", () => { wrap(<CalendarViewPage />); expect(screen.getByText("October 2026")).toBeInTheDocument(); });
    it("SettingsPage renders", () => { wrap(<SettingsPage />); expect(screen.getByText("Board Settings")).toBeInTheDocument(); });
});
