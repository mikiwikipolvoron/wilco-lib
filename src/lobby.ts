export type ClientLobbyEvent =
	| { type: "request_start_beats" }
	| { type: "request_start_ar" }
	| { type: "request_start_instruments" }
	| { type: "request_start_energizer" }
	| { type: "request_start_over" };

export const CLIENT_LOBBY_EVENTS = [
	"request_start_over",
	"request_start_ar",
	"request_start_instruments",
	"request_start_energizer",
	"request_start_beats",
] as const;

export type ServerLobbyEvent =
	| { type: "placeholder" }
	| { type: "placeholder" }
	| { type: "placeholder" };
export const SERVER_LOBBY_EVENTS = ["placeholder"] as const;

export type FloatingEmoji = {
	id: number;
	emoji: string;
	x: number;
	y: number;
	drift: number;
	scale?: number;
	duration?: number;
	jitter?: number;
};
