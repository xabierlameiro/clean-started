export type LogEntry = {
    id: string;
    person: string;
    page: string;
    action: string;
};

export type LogDetail = {
    state: string;
    id: string;
    person: string;
    page: string;
    action: string;
};

export const logData: LogEntry[] = [
    { id: '7892', person: 'Alice', page: 'Dashboard', action: 'Edit' },
    { id: '5027', person: 'Sergio', page: 'Settings', action: 'Delete' },
    { id: '1234', person: 'Gabriel', page: 'Settings', action: 'Create' },
    { id: '6789', person: 'Emma', page: 'Dashboard', action: 'Create' },
    { id: '9401', person: 'Grace', page: 'Settings', action: 'Edit' },
    { id: '3158', person: 'Jack', page: 'Dashboard', action: 'Delete' },
    { id: '8210', person: 'Sergio', page: 'Dashboard', action: 'Create' },
    { id: '4596', person: 'Henry', page: 'Settings', action: 'Delete' },
    { id: '7423', person: 'Frank', page: 'Dashboard', action: 'Edit' },
    { id: '1937', person: 'Iris', page: 'Settings', action: 'Create' },
    { id: '7892', person: 'Emma', page: 'Settings', action: 'Edit' },
    { id: '5027', person: 'Sergio', page: 'Dashboard', action: 'Delete' },
    { id: '1234', person: 'Gabriel', page: 'Dashboard', action: 'Create' },
    { id: '6789', person: 'Sergio', page: 'Settings', action: 'Delete' },
    { id: '9401', person: 'Frank', page: 'Dashboard', action: 'Edit' },
    { id: '3158', person: 'Gabriel', page: 'Settings', action: 'Create' },
    { id: '8210', person: 'Henry', page: 'Dashboard', action: 'Delete' },
    { id: '4596', person: 'Grace', page: 'Dashboard', action: 'Create' },
    { id: '7423', person: 'David', page: 'Settings', action: 'Edit' },
    { id: '1937', person: 'Iris', page: 'Dashboard', action: 'Delete' },
    // Agrega más registros de log aquí...
];

export const logDetails: LogDetail[] = [
    { state: 'Dados Previos', id: '7892', person: 'Alice', page: 'Dashboard', action: 'Edit' },
    { state: 'Dados Nuevos', id: '7893', person: 'Alice', page: 'Dashboard', action: 'Edit' },
];
