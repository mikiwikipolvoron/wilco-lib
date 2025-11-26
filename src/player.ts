export type Player = {
	id: string;
	nickname: string;
	role: "client" | "entertainer";
	groupId?: string;
	lastSeen: Date;
};
