import { ChevronLeft, ChevronRight, Calendar as CalIcon } from "lucide-react";
import { Button, Badge, Card } from "@geenius-ui/react-css";

export default function CalendarViewPage() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const grid = Array.from({ length: 35 }, (_, i) => {
        const dayNum = (i - 2) > 0 && (i - 2) <= 31 ? (i - 2) : "";
        let items: { title: string; color: string }[] = [];
        if (dayNum === 14) items = [{ title: "Design API", color: "accent" }];
        if (dayNum === 15) items = [{ title: "Docs review", color: "info" }, { title: "Weekly sync", color: "secondary" }];
        if (dayNum === 22) items = [{ title: "Release v1.2", color: "destructive" }];

        return { dayNum, items, isToday: dayNum === 15 };
    });

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200, height: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-3)" }}><CalIcon style={{ color: "var(--color-accent-primary)" }} /> October 2026</h1>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Button variant="outline" size="sm">Today</Button>
                <div style={{ display: "flex", gap: 4, margin: "0 var(--space-2)" }}>
                    <Button variant="outline" size="sm" icon={<ChevronLeft size={16} />} />
                    <Button variant="outline" size="sm" icon={<ChevronRight size={16} />} />
                </div>
            </div>
        </div>

        <Card className="calendar-card-wrapper" padding="none">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                {days.map(d => <div key={d} style={{ padding: "10px", textAlign: "center", fontWeight: 600, fontSize: "12px", color: "var(--color-text-secondary)" }}>{d}</div>)}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gridTemplateRows: "repeat(5, 1fr)", flex: 1, background: "var(--color-border)", gap: 1 }}>
                {grid.map((cell, i) => (
                    <div key={i} style={{ background: "var(--color-bg-card)", padding: "var(--space-2)", display: "flex", flexDirection: "column", gap: 4 }}>
                        {cell.dayNum && (
                            <span style={{ fontSize: "12px", fontWeight: 600, alignSelf: "flex-end", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: cell.isToday ? "var(--color-accent-primary)" : "transparent", color: cell.isToday ? "white" : "var(--color-text-secondary)" }}>
                                {cell.dayNum}
                            </span>
                        )}
                        <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, overflowY: "auto" }}>
                            {cell.items.map((item, j) => (
                                <Badge key={j} size="sm" variant={item.color === "destructive" ? "destructive" : "default"}>
                                    {item.title}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    </div>);
}
