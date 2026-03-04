import { Plus, MoreHorizontal, MessageSquare, Paperclip, Clock } from "lucide-react";
import { Button, Badge, Card } from "@geenius-ui/react-css";

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
                <Button variant="primary" size="sm" icon={<Plus size={14} />}>Share</Button>
                <Button variant="ghost" icon={<MoreHorizontal size={18} />} />
            </div>
        </div>

        <div style={{ display: "flex", gap: "var(--space-4)", flex: 1, overflowX: "auto", overflowY: "hidden", paddingBottom: "var(--space-4)" }}>
            {lists.map(list => (
                <div key={list.id} className="kanban-list">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)", padding: "0 var(--space-1)" }}>
                        <h2 style={{ fontSize: "14px", fontWeight: 600 }}>{list.title} <span style={{ color: "var(--color-text-tertiary)", fontWeight: 400, marginLeft: 4 }}>{list.cards.length}</span></h2>
                        <Button variant="ghost" size="sm" icon={<MoreHorizontal size={16} />} />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", overflowY: "auto", flex: 1, minHeight: 10 }}>
                        {list.cards.map(card => (
                            <Card key={card.id} padding="md" className="kanban-card">
                                <div style={{ display: "flex", gap: 4, marginBottom: "var(--space-2)", flexWrap: "wrap" }}>
                                    {card.labels.map(l => (
                                        <Badge key={l} size="sm" variant={l === "Critical" || l === "High" ? "destructive" : l === "Done" ? "success" : "default"}>{l}</Badge>
                                    ))}
                                </div>
                                <h3 style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.4, marginBottom: "var(--space-3)" }}>{card.title}</h3>

                                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", color: "var(--color-text-tertiary)", fontSize: "12px" }}>
                                    {card.due && (
                                        <Badge size="sm" variant={card.due === "Overdue" ? "destructive" : card.due === "Today" ? "warning" : card.due === "Done" ? "success" : "secondary"}>
                                            <Clock size={12} /> {card.due}
                                        </Badge>
                                    )}
                                    {card.comments > 0 && <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MessageSquare size={12} /> {card.comments}</span>}
                                    {card.attachments > 0 && <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Paperclip size={12} /> {card.attachments}</span>}
                                </div>
                            </Card>
                        ))}
                    </div>

                    <Button variant="ghost" size="sm" icon={<Plus size={16} />} className="kanban-add-card">Add a card</Button>
                </div>
            ))}

            <div style={{ width: 300, flexShrink: 0 }}>
                <Button variant="outline" icon={<Plus size={16} />} className="kanban-add-list">Add another list</Button>
            </div>
        </div>
    </div>);
}
