export type MessageRole = "user" | "system" | "ai";

export interface ChatMessage {
    role: MessageRole;
    content: string;
}