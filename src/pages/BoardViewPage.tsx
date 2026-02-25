import { Plus, MoreHorizontal, MessageSquare, Paperclip, Clock } from "lucide-react";

export default function BoardViewPage() {
    const lists = [
        {
            id: "l1", title: "To Do", cards: [
                { id: "c1", title: "Design new navigation bar", labels: ["UI/UX", "High"], comments: 3, attachments: 1, due: "Tomorrow" },
                { id: "c2", title: "Write API documentation", labels: ["Docs"], comments: 0, attachments: 0, due: "Oct 15" }
            ]
        },
        {
            id: "l2", title: "In Progress", cards: [
                { id: "c3", title: "Implement dark mode toggle", labels: ["Frontend"], comments: 5, attachments: 2, due: "Today" },
                { id: "c4", title: "Setup Redux store", labels: ["Frontend", "Critical"], comments: 12, attachments: 0, due: "Overdue" }
            ]
        },
        {
            id: "l3", title: "Review", cards: [
                { id: "c5", title: "Authentication flow", labels: ["Backend", "Security"], comments: 24, attachments: 5, due: "Done" }
            ]
        },
        { id: "l4", title: "Done", cards: [] }
    ];

    return (<div style={{ padding: "var(--space-6)", height: "100vh", display: "flex", flexDirection: "column", background: "var(--board-bg)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)", flexShrink: 0 }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>Frontend Revamp</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "13px" }}>Private workspace • 4 members</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <button className="btn btn-primary btn-sm"><Plus size={14} /> Share</button>
                <button className="btn btn-ghost"><MoreHorizontal size={18} /></button>
            </div>
        </div>

        <div style={{ display: "flex", gap: "var(--space-4)", flex: 1, overflowX: "auto", overflowY: "hidden", paddingBottom: "var(--space-4)" }}>
            {lists.map(list => (
                <div key={list.id} className="kanban-list">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)", padding: "0 var(--space-1)" }}>
                        <h2 style={{ fontSize: "14px", fontWeight: 600 }}>{list.title} <span style={{ color: "var(--color-text-tertiary)", fontWeight: 400, marginLeft: 4 }}>{list.cards.length}</span></h2>
                        <button className="btn-ghost" style={{ padding: 4, borderRadius: "var(--radius-sm)", color: "var(--color-text-secondary)" }}><MoreHorizontal size={16} /></button>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", overflowY: "auto", flex: 1, minHeight: 10 }}>
                        {list.cards.map(card => (
                            <div key={card.id} className="kanban-card">
                                <div style={{ display: "flex", gap: 4, marginBottom: "var(--space-2)", flexWrap: "wrap" }}>
                                    {card.labels.map(l => (
                                        <span key={l} style={{ fontSize: "11px", fontWeight: 600, padding: "2px 6px", borderRadius: "var(--radius-sm)", background: l === "Critical" || l === "High" ? "var(--color-danger)" : l === "Done" ? "var(--color-success)" : "var(--color-accent-primary)", color: "white" }}>{l}</span>
                                    ))}
                                </div>
                                <h3 style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.4, marginBottom: "var(--space-3)" }}>{card.title}</h3>

                                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", color: "var(--color-text-tertiary)", fontSize: "12px" }}>
                                    {card.due && (
                                        <span style={{ display: "flex", alignItems: "center", gap: 4, color: card.due === "Overdue" ? "var(--color-danger)" : card.due === "Today" ? "var(--color-warning)" : card.due === "Done" ? "var(--color-success)" : "inherit", background: card.due === "Overdue" || card.due === "Today" || card.due === "Done" ? "var(--color-bg-primary)" : "transparent", padding: card.due === "Overdue" || card.due === "Today" || card.due === "Done" ? "2px 6px" : 0, borderRadius: "var(--radius-sm)" }}><Clock size={12} /> {card.due}</span>
                                    )}
                                    {card.comments > 0 && <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MessageSquare size={12} /> {card.comments}</span>}
                                    {card.attachments > 0 && <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Paperclip size={12} /> {card.attachments}</span>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="btn-ghost" style={{ width: "100%", marginTop: "var(--space-2)", padding: "8px", color: "var(--color-text-secondary)", fontWeight: 500, display: "flex", alignItems: "center", gap: 6, justifyContent: "flex-start" }}><Plus size={16} /> Add a card</button>
                </div>
            ))}

            <div style={{ width: 300, flexShrink: 0 }}>
                <button className="btn" style={{ width: "100%", background: "rgba(255,255,255,0.5)", borderStyle: "dashed", padding: "12px", justifyContent: "flex-start" }}><Plus size={16} /> Add another list</button>
            </div>
        </div>
    </div>);
}
