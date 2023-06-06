import { Column, Table } from '@tanstack/react-table';

export interface FilterProps {
    column: Column<any, any>;
    table: Table<any>;
}

export function Filter(props: FilterProps) {
    const columnFilterValue = props.column.getFilterValue();

    return (
        <input
            type="text"
            value={(columnFilterValue ?? '') as string}
            onChange={(e) => props.column.setFilterValue(e.target.value)}
            placeholder={`Search...`}
            className="w-36 border shadow rounded"
        />
    );
}
