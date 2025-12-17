import { hatchet } from "../clients.js"

type StarCreated = {
    action: "created"
    sender: {
        login?: string | null;
        email?: string | null;
        html_url: string;
    }
    repository: {
        name: string;
        html_url: string;
    }
}

export const created = hatchet.task({
    name: "star",
    onEvents: ["created"],
    fn: async ({ sender: { login, email, html_url }, repository }: StarCreated) => {
        console.log("⭐ New star!")
        console.log(`  User: ${login || "Unknown"}${email ? ` (${email})` : ""}`)
        console.log(`  Profile: ${html_url}`)
        console.log(`  Repository: ${repository.name} (${repository.html_url})`)
    }
})
