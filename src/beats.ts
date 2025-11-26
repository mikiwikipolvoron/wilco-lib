
export type ClientBeatsEvent =
	| { type: "tap"; timestamp: number }
	| { type: "reaction"; emoji: string };
export const CLIENT_BEATS_EVENTS = ["tap", "reaction"] as const;

export type GroupAccuracy = {
	groupId: string;
	accuracy: number;
	avgOffset: number;
	tapCount: number;
};

export type BeatsPhase = "instructions" | "beat_on" | "beat_off" | "results";


export type ServerBeatsEvent =
	| { type: "beat_start"; timestamp: number }
	| { type: "beat_choose_song"; songLink: string }
	| { type: "beat_finish"; timestamp: number }
	| { type: "beat_phase_change"; phase: BeatsPhase; round: number; bpm: number }
	| { type: "beat_team_sync_update"; groupAccuracies: GroupAccuracy[] }
	| { type: "beat_results"; winner: string; groupAccuracies: GroupAccuracy[]; mvp: { playerId: string; nickname: string; accuracy: number } };
export const SERVER_BEATS_EVENTS = ["beat_start", "beat_choose_song", "beat_finish", "beat_phase_change", "beat_team_sync_update", "beat_results"] as const;
