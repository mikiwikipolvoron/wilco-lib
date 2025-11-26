export type ClientEnergizerEvent =
	| { type: "placeholder"; content: "something" }
	| { type: "placeholder"; content: "something" };
export const CLIENT_ENERGIZER_EVENTS = ["placeholder"] as const;
export type ServerEnergizerEvent =
	| { type: "placeholder"; content: "something" }
	| { type: "placeholder"; content: "something" };
export const SERVER_ENERGIZER_EVENTS = ["placeholder"] as const;
