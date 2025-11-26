export type ClientLobbyEvent =
	| { type: "placeholder" }
	| { type: "placeholder" }
	| { type: "request_start_beats" };
export const CLIENT_LOBBY_EVENTS = ["placeholder", "request_start_beats"] as const;

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
