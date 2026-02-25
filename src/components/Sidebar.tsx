import { Link, useLocation } from "react-router-dom";
import { Columns, Calendar, Settings, Hash, Plus, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Columns, label: "Frontend Revamp Board" },
        { to: "/calendar", icon: Calendar, label: "Due Calendar" },
        { to: "/settings", icon: Settings, label: "Board Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-4)", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div style={{ background: "var(--color-accent-primary)", color: "var(--color-text-inverse)", padding: 4, borderRadius: "var(--radius-sm)" }}><Columns size={18} /></div>
                <strong style={{ fontSize: "16px", fontWeight: 700 }}>KanbanFlow</strong>
            </div>
            <ChevronDown size={16} style={{ color: "var(--color-text-secondary)" }} />
        </div>

        <div style={{ padding: "var(--space-4) var(--space-4) var(--space-2)" }}>
            <h3 style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: "var(--space-2)" }}>Your Boards</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "6px 8px", background: "var(--color-accent-soft)", color: "var(--color-accent-primary)", borderRadius: "var(--radius-sm)", fontWeight: 600 }}><Hash size={14} /> Frontend Revamp</div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "6px 8px", color: "var(--color-text-secondary)", borderRadius: "var(--radius-sm)", fontWeight: 500 }}><Hash size={14} /> Q4 Marketing</div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "6px 8px", color: "var(--color-text-secondary)", borderRadius: "var(--radius-sm)", fontWeight: 500 }}><Hash size={14} /> Roadmap Planner</div>
            </div>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%", marginTop: "var(--space-2)", justifyContent: "flex-start" }}><Plus size={14} /> Create Board</button>
        </div>

        <div style={{ padding: "var(--space-4)", flex: 1 }}>
            <h3 style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: "var(--space-2)" }}>Views</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "8px 12px", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-text-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-bg-secondary)" : "transparent", fontWeight: loc.pathname === l.to ? 600 : 500, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={16} />{l.label}</Link>)}
            </nav>
        </div>

        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-accent-primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600 }}>MN</div>
                <div style={{ fontSize: "13px", fontWeight: 600 }}>Workspace</div>
            </div>
            <ThemeToggle />
        </div>
    </aside>);
}
