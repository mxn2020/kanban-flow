import { Settings, Users, Palette, Trash2, Save } from "lucide-react";

export default function SettingsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 800 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-3)" }}><Settings style={{ color: "var(--color-text-secondary)" }} /> Board Settings</h1>
            <button className="btn btn-primary"><Save size={16} /> Save Changes</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <div className="card" style={{ padding: "var(--space-6)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)" }}>General</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "var(--space-2)", color: "var(--color-text-secondary)" }}>Board Name</label>
                        <input type="text" defaultValue="Frontend Revamp" style={{ width: "100%", padding: "8px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg-primary)", color: "var(--color-text-primary)", fontFamily: "inherit" }} />
                    </div>
                    <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "var(--space-2)", color: "var(--color-text-secondary)" }}>Description</label>
                        <textarea defaultValue="Tracking the Q4 UI/UX frontend revamp project across all web apps." style={{ width: "100%", minHeight: 80, padding: "8px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg-primary)", color: "var(--color-text-primary)", fontFamily: "inherit", resize: "vertical" }} />
                    </div>
                </div>
            </div>

            <div className="card" style={{ padding: "var(--space-6)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Palette size={18} /> Appearance</h2>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    {["#E0E7FF", "#DCFCE7", "#FEF9C3", "#FEE2E2", "#F3E8FF", "#F3F4F6", "#0F172A"].map(c => (
                        <button key={c} style={{ width: 40, height: 40, borderRadius: 8, background: c, border: c === "#E0E7FF" ? "2px solid var(--color-accent-primary)" : "1px solid var(--color-border)", cursor: "pointer" }}></button>
                    ))}
                </div>
            </div>

            <div className="card" style={{ padding: "var(--space-6)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-2)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Users size={18} /> Access & Permissions</h2>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>Manage who can view and edit this board.</p>

                <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", background: "var(--color-bg-primary)" }}>
                    <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-accent-primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>MN</div>
                            <div><div style={{ fontWeight: 600, fontSize: "14px" }}>Mehdi Nabhani</div><div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>mehdi@example.com</div></div>
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", background: "var(--color-bg-card)", padding: "4px 8px", borderRadius: 4, border: "1px solid var(--color-border)" }}>Admin</span>
                    </div>
                    <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-info)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>JD</div>
                            <div><div style={{ fontWeight: 600, fontSize: "14px" }}>John Doe</div><div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>john@example.com</div></div>
                        </div>
                        <select style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", background: "var(--color-bg-card)", padding: "4px 8px", borderRadius: 4, border: "1px solid var(--color-border)" }}>
                            <option>Editor</option><option>Viewer</option><option>Admin</option><option>Remove</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="card" style={{ padding: "var(--space-6)", border: "1px solid var(--color-danger)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-danger)", marginBottom: "var(--space-2)" }}>Danger Zone</h2>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>Permanently delete this board and all of its cards. This action cannot be undone.</p>
                <button className="btn" style={{ color: "var(--color-danger)", borderColor: "var(--color-danger)" }}><Trash2 size={16} /> Delete Board</button>
            </div>
        </div>
    </div>);
}
