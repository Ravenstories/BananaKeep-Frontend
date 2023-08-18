export interface I_Notification {
    id: number;
    dismissed: boolean;
    triggeredTimestamp: string;
    gpsUnit: GpsUnit;
    logs: Logs[];
}

export interface GpsUnit {
    id: number;
    name: string;
    active: boolean;
    altitude: number;
    latitude: number;
    longitude: number;
    timestamp: string;
}

export interface Logs {
    incidentID: number;
    timestamp: string;
    longitude: number;
    latitude: number;
    altitude: number;
}