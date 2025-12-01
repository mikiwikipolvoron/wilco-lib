export type InstrumentId = "drums" | "maracas" | "guitar" | "violin";

export type InstrumentInfo = {
	id: InstrumentId;
	name: string;
	hint: string;
	tool: string;
	color: string;
};

export type ClientInstrumentsEvent = {
	type: "instrument_motion";
	magnitude: number;
	timestamp: number;
};
export const CLIENT_INSTRUMENT_EVENTS = ["instrument_motion"] as const;

export type InstrumentsPhase = "demo" | "finale";

export type ServerInstrumentsEvent =
	| { type: "instruments_phase"; phase: InstrumentsPhase }
	| { type: "instruments_demo_step"; instrument: InstrumentInfo; durationMs: number }
	| { type: "instruments_assignment"; instrument: InstrumentId }
	| { type: "instruments_finale_start"; durationMs: number }
	| {
			type: "instruments_energy";
			level: number;
			instrumentLevels: Record<InstrumentId, number>;
	  }
	| { type: "instruments_spotlight"; instrument: InstrumentId; active: boolean; durationMs: number };

export const SERVER_INSTRUMENT_EVENTS = [
	"instruments_phase",
	"instruments_demo_step",
	"instruments_assignment",
	"instruments_finale_start",
	"instruments_energy",
	"instruments_spotlight",
] as const;
