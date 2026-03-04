import { Settings, Users, Palette, Trash2, Save } from "lucide-react";
import { Button, Card, Input, Textarea, Label, Select, SelectItem, Badge, Avatar } from "@geenius-ui/react-css";

export default function SettingsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 800 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-3)" }}><Settings style={{ color: "var(--color-text-secondary)" }} /> Board Settings</h1>
            <Button variant="primary" icon={<Save size={16} />}>Save Changes</Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Card padding="lg">
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)" }}>General</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <div>
                        <Label style={{ marginBottom: "var(--space-2)", display: "block" }}>Board Name</Label>
                        <Input type="text" defaultValue="Frontend Revamp" style={{ width: "100%" }} />
                    </div>
                    <div>
                        <Label style={{ marginBottom: "var(--space-2)", display: "block" }}>Description</Label>
                        <Textarea defaultValue="Tracking the Q4 UI/UX frontend revamp project across all web apps." style={{ width: "100%", minHeight: 80 }} />
                    </div>
                </div>
            </Card>

            <Card padding="lg">
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Palette size={18} /> Appearance</h2>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    {["#E0E7FF", "#DCFCE7", "#FEF9C3", "#FEE2E2", "#F3E8FF", "#F3F4F6", "#0F172A"].map(c => (
                        <button key={c} style={{ width: 40, height: 40, borderRadius: 8, background: c, border: c === "#E0E7FF" ? "2px solid var(--color-accent-primary)" : "1px solid var(--color-border)", cursor: "pointer" }}></button>
                    ))}
                </div>
            </Card>

            <Card padding="lg">
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-2)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Users size={18} /> Access & Permissions</h2>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>Manage who can view and edit this board.</p>

                <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", background: "var(--color-bg-primary)" }}>
                    <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <Avatar fallback="MN" size="sm" />
                            <div><div style={{ fontWeight: 600, fontSize: "14px" }}>Mehdi Nabhani</div><div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>mehdi@example.com</div></div>
                        </div>
                        <Badge variant="secondary">Admin</Badge>
                    </div>
                    <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <Avatar fallback="JD" size="sm" />
                            <div><div style={{ fontWeight: 600, fontSize: "14px" }}>John Doe</div><div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>john@example.com</div></div>
                        </div>
                        <Select defaultValue="Editor" style={{ fontSize: "12px" }}>
                            <SelectItem value="Editor">Editor</SelectItem>
                            <SelectItem value="Viewer">Viewer</SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Remove">Remove</SelectItem>
                        </Select>
                    </div>
                </div>
            </Card>

            <div style={{ border: "1px solid var(--color-danger)", borderRadius: "var(--radius-md)" }}>
                <Card padding="lg">
                    <h2 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-danger)", marginBottom: "var(--space-2)" }}>Danger Zone</h2>
                    <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>Permanently delete this board and all of its cards. This action cannot be undone.</p>
                    <Button variant="destructive" icon={<Trash2 size={16} />}>Delete Board</Button>
                </Card>
            </div>
        </div>
    </div>);
}
