import type { Player } from "./player";
import type { ActivityId, GroupDefinitions, ServerState } from "./state";

export type ClientServiceEvent =
	| { type: "request_state" }
	| {
			type: "register";
			nickname?: string;
			role: "client" | "entertainer";
			sessionId?: string; // NEW: optional for backwards compat
			deviceId?: string; // NEW: for reconnection
	  };
export const CLIENT_SERVICE_EVENTS = ["request_state", "register"] as const;

export type ServerServiceEvent =
	| { type: "player_joined"; player: Player }
	| { type: "player_left"; playerId: string }
	| { type: "activity_started"; activity: ActivityId }
	| { type: "state_broadcast"; state: ServerState }
	| { type: "state_update"; state: ServerState } // Added temporarily to not break all the stuff, should be removed.
	| { type: "groups_updated"; groups: GroupDefinitions };
export const SERVER_SERVICE_EVENTS = [
	"player_joined",
	"player_left",
	"activity_started",
	"state_broadcast",
	"state_update",
	"groups_updated",
] as const;
