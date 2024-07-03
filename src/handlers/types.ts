import { AllMiddlewareArgs, SlackEventMiddlewareArgs } from "@slack/bolt"

export type TeamJoinArgs = SlackEventMiddlewareArgs<"team_join"> & AllMiddlewareArgs
