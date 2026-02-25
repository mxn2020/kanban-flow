import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    boards: defineTable({ name: v.string(), color: v.string(), createdAt: v.string() }),
    lists: defineTable({ boardId: v.id("boards"), title: v.string(), order: v.number() }).index("by_board", ["boardId"]),
    cards: defineTable({ listId: v.id("lists"), title: v.string(), description: v.optional(v.string()), order: v.number(), labels: v.array(v.string()), due: v.optional(v.string()) }).index("by_list", ["listId"]),
    users: defineTable({ name: v.string(), email: v.string(), avatar: v.string() })
});
