import type { ClientAREvent, ServerAREvent } from "./ar";
import type { ClientBeatsEvent, ServerBeatsEvent } from "./beats";
import type { ClientEnergizerEvent, ServerEnergizerEvent } from "./energizer";
import type { ClientGlobalEvent, ServerGlobalEvent } from "./global";
import type {
	ClientInstrumentsEvent,
	ServerInstrumentsEvent,
} from "./instruments";
import type { ClientLobbyEvent, ServerLobbyEvent } from "./lobby";
import type { ClientServiceEvent, ServerServiceEvent } from "./service";

type ClientEvent =
	| ClientGlobalEvent
	| ClientAREvent
	| ClientBeatsEvent
	| ClientEnergizerEvent
	| ClientLobbyEvent
	| ClientInstrumentsEvent
	| ClientServiceEvent;

type ServerEvent =
	| ServerGlobalEvent
	| ServerAREvent
	| ServerBeatsEvent
	| ServerEnergizerEvent
	| ServerInstrumentsEvent
	| ServerLobbyEvent
	| ServerServiceEvent;

export type { ClientEvent, ServerEvent };
