export type ARPhase = "anchoring" | "hunting" | "boss" | "results";

export interface ARItem {
	id: string;
	type: "small" | "boss";
	position: { x: number; y: number; z: number };
	scale: number;
	health?: number; // Only for boss item
}

export type ClientAREvent =
	| { type: "anchor_success" } // Client scanned marker successfully
	| { type: "tap_item"; itemId: string } // Client tapped an item
	| { type: "reaction"; emoji: string }; // Emoji reaction

export const CLIENT_AR_EVENTS = [
	"anchor_success",
	"tap_item",
	"reaction",
] as const;

export type ServerAREvent =
	| { type: "ar_phase_change"; phase: ARPhase }
	| { type: "ar_items_update"; items: ARItem[] }
	| { type: "ar_boss_health"; health: number; maxHealth: number }
	| {
			type: "ar_item_collected";
			itemId: string;
			tapCount: number;
			tapsNeeded: number;
	  }
	| {
			type: "ar_results";
			totalTaps: number;
			participatingPlayers: number;
	  };

export const SERVER_AR_EVENTS = [
	"ar_phase_change",
	"ar_items_update",
	"ar_boss_health",
	"ar_item_collected",
	"ar_results",
] as const;
