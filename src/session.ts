// Session types for admin API responses
export interface Session {
	id: string;
	createdAt: string; // ISO date string
	activity: string;
	playerCount: number;
	entertainerConnected: boolean;
	isActive: boolean;
}

export interface SessionState {
	session: Session | null;
	players: Array<{ id: string; nickname: string; role: string }>;
}
