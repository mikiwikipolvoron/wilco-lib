import type { Player } from "./player";

export type GroupDefinitions = Record<string, Array<string>>;

export type ServerState = {
	currentActivity: ActivityId;
	players: Record<string, Player>;
	groups?: GroupDefinitions;
};

export type ActivityId =
	| "lobby"
	| "beats"
	| "ar"
	| "instruments"
	| "energizer"
	| "start";
