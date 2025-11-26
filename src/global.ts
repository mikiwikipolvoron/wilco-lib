export type ServerGlobalEvent =
	| { type: "placeholder" }
	| { type: "reaction"; emoji: string; playerId: string; timestamp: number };
export const SERVER_GLOBAL_EVENTS = ["placeholder", "reaction"] as const;
export type ClientGlobalEvent =
	| { type: "placeholder" }
	| { type: "reaction"; emoji: string };
export const CLIENT_GLOBAL_EVENTS = ["placeholder", "reaction"] as const;
