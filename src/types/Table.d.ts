export type EditableTableProps<T> = {
    Filter: React.ComponentType<{ column: any; table: any }>;
    // eslint-disable-next-line no-unused-vars
    useColumns: (columnHelper: any, handleRemoveRow: any) => any;
    dataList: T[];
    dataType: T;
};

export type Person = {
    id: string;
    name: string;
    dateOfBirth: string;
    major: string;
};

export type SelectorOptionsType = {
    name: string;
    value: string;
};
