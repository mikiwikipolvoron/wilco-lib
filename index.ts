import type { ClientAREvent, ServerAREvent } from "./src/ar";
import { CLIENT_AR_EVENTS, SERVER_AR_EVENTS } from "./src/ar";
import type { ClientBeatsEvent, ServerBeatsEvent } from "./src/beats";
import { CLIENT_BEATS_EVENTS, SERVER_BEATS_EVENTS } from "./src/beats";
import type {
	ClientEnergizerEvent,
	ServerEnergizerEvent,
	EnergizerPhase,
	PlayerEnergy,
	EnergizerInstructionEvent,
	EnergizerSpotlightEvent,
	EnergizerCell,
	EnergizerPattern,
	LedSequencePayload,
} from "./src/energizer";
import { CLIENT_ENERGIZER_EVENTS, SERVER_ENERGIZER_EVENTS } from "./src/energizer";
import type { ClientInstrumentsEvent, ServerInstrumentsEvent } from "./src/instruments";
import { CLIENT_INSTRUMENT_EVENTS, SERVER_INSTRUMENT_EVENTS } from "./src/instruments";
import type { ClientLobbyEvent, ServerLobbyEvent } from "./src/lobby";
import { CLIENT_LOBBY_EVENTS, SERVER_LOBBY_EVENTS } from "./src/lobby";
import type { ClientServiceEvent, ServerServiceEvent } from "./src/service";
import { CLIENT_SERVICE_EVENTS, SERVER_SERVICE_EVENTS } from "./src/service";
import type { ClientGlobalEvent, ServerGlobalEvent } from "./src/global";
import { CLIENT_GLOBAL_EVENTS, SERVER_GLOBAL_EVENTS } from "./src/global";
import type { ServerState, ActivityId, GroupDefinitions } from "./src/state";
import type { Player } from "./src/player";
import type { GroupAccuracy } from "./src/beats";

import type { ClientEvent, ServerEvent } from "./src/event";

export type { 
    GroupAccuracy,
    ClientGlobalEvent,
    ServerGlobalEvent,
    ClientAREvent,
    ServerAREvent,
    ClientBeatsEvent,
    ServerBeatsEvent,
    ClientEnergizerEvent,
    ServerEnergizerEvent,
    EnergizerPhase,
    PlayerEnergy,
    EnergizerInstructionEvent,
    EnergizerSpotlightEvent,
    EnergizerCell,
    EnergizerPattern,
    LedSequencePayload,
    ClientEvent,
    ServerEvent,
    ClientInstrumentsEvent,
    ServerInstrumentsEvent,
    ClientLobbyEvent,
    ServerLobbyEvent,
    ClientServiceEvent,
    ServerServiceEvent,
    ServerState,
    ActivityId,
    GroupDefinitions,
    Player,
};

export {
    CLIENT_GLOBAL_EVENTS,
    SERVER_GLOBAL_EVENTS,
    CLIENT_AR_EVENTS,
    SERVER_AR_EVENTS,
    CLIENT_BEATS_EVENTS,
    SERVER_BEATS_EVENTS,
    CLIENT_ENERGIZER_EVENTS,
    SERVER_ENERGIZER_EVENTS,
    CLIENT_INSTRUMENT_EVENTS,
    SERVER_INSTRUMENT_EVENTS,
    CLIENT_LOBBY_EVENTS,
    SERVER_LOBBY_EVENTS,
    CLIENT_SERVICE_EVENTS,
    SERVER_SERVICE_EVENTS
};
