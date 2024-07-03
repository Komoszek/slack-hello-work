import { App } from "@slack/bolt"
import { ensureDefined } from "@leancodepl/utils"
import { teamJoinHandler } from "./handlers/teamJoinHandler"

const app = new App({
    token: ensureDefined(process.env.SLACK_BOT_TOKEN, "SLACK_BOT_TOKEN not defined"),
    socketMode: true,
    appToken: ensureDefined(process.env.SLACK_APP_TOKEN, "SLACK_APP_TOKEN not defined"),
})

app.event("team_join", teamJoinHandler)
;(async () => {
    await app.start()

    console.log("🧑‍💼 Hello Hello work!")
})()
