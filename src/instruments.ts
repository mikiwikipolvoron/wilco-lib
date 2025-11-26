export type ClientInstrumentsEvent =
	| { type: "placeholder"; content: "something" }
	| { type: "placeholder"; content: "something" };
export const CLIENT_INSTRUMENT_EVENTS = ["placeholder"] as const;

export type ServerInstrumentsEvent =
	| { type: "placeholder"; content: "something" }
	| { type: "placeholder"; content: "something" };
export const SERVER_INSTRUMENT_EVENTS = ["placeholder"] as const;
