import { TeamJoinArgs } from "./types"

export async function teamJoinHandler({ event, client }: TeamJoinArgs) {
    if (event.user.is_bot) {
        return
    }

    await client.chat.postMessage({
        channel: event.user.id,
        text: "No witam",
    })
}
