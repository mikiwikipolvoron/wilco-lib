export type EnergizerPhase =
	| "instructions1"
	| "movement"
	| "send_energy"
	| "instructions2"
	| "sequence_show"
	| "sequence_input"
	| "results";

export type EnergizerInstructionEvent = {
	type: "energizer_instruction";
	phase: "instructions1" | "instructions2";
	slide: number;
	totalSlides: number;
	text: string;
	durationMs: number;
};

export type EnergizerSpotlightEvent = {
	type: "energizer_spotlight";
	active: boolean;
	durationMs: number;
};

export type ClientEnergizerMotion = {
	type: "energizer_motion";
	magnitude: number;
	timestamp: number;
};

export type ClientEnergizerSwipeSend = {
	type: "energizer_swipe_send";
	charge: number;
};

export type EnergizerCell = { index: number; color: string };

export type ClientEnergizerSequenceSubmit = {
	type: "energizer_sequence_submit";
	cells: EnergizerCell[];
};

export type ClientEnergizerEvent =
	| ClientEnergizerMotion
	| ClientEnergizerSwipeSend
	| ClientEnergizerSequenceSubmit;

export const CLIENT_ENERGIZER_EVENTS = [
	"energizer_motion",
	"energizer_swipe_send",
	"energizer_sequence_submit",
	"reaction",
] as const;

export type PlayerEnergy = {
	playerId: string;
	nickname: string;
	charge: number;
	idle: boolean;
};

export type EnergizerPattern = {
	rows: number;
	cols: number;
	cells: EnergizerCell[];
	displayMs: number;
	sequenceId: number;
};

export type LedStep = { time: number; leds: { id: number; color: string }[] };

export type LedSequencePayload = {
	type: "led_sequence";
	sequence: number;
	pattern: LedStep[];
};

export type ServerEnergizerEvent =
	| { type: "energizer_phase_change"; phase: EnergizerPhase; durationMs?: number }
	| EnergizerInstructionEvent
	| EnergizerSpotlightEvent
	| { type: "energizer_player_update"; charge: number; idle: boolean }
	| { type: "energizer_entertainer_update"; players: PlayerEnergy[] }
	| { type: "energizer_energy_sent"; playerId: string; charge: number }
	| { type: "energizer_sequence_show"; pattern: EnergizerPattern }
	| { type: "energizer_sequence_hide" }
	| {
			type: "energizer_sequence_result";
			success: boolean;
			correctCount: number;
			totalParticipants: number;
			nextDisplayMs?: number;
	  }
	| LedSequencePayload;

export const SERVER_ENERGIZER_EVENTS = [
	"energizer_phase_change",
	"energizer_instruction",
	"energizer_spotlight",
	"energizer_player_update",
	"energizer_entertainer_update",
	"energizer_energy_sent",
	"energizer_sequence_show",
	"energizer_sequence_hide",
	"energizer_sequence_result",
	"led_sequence",
] as const;
