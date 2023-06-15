import { useCallback } from 'react';
import { Person } from '@/mocks/mockMakeDataList';
import { LogEntry } from '@/mocks/mockLogsDataList';

const useTable = (
    data: (Person | LogEntry)[],
    setData: React.Dispatch<React.SetStateAction<(Person | LogEntry)[]>>
) => {
    const handleAddRow = () => {
        let newData = {} as Person | LogEntry;

        newData = {
            id: crypto.randomUUID().slice(0, 8),
            titular: '',
            amount: null as unknown as number,
            stateDoc: '',
            campaing: '',
            customer: '',
            numDoc: null as unknown as number,
        };

        setData([...data, newData]);
    };

    const handleRemoveRow = useCallback(
        (row: any) => {
            const updatedData = data.filter((d: any) => d.id !== row.original.id);
            setData(updatedData);
        },
        [data, setData]
    );

    return {
        handleAddRow,
        handleRemoveRow,
    };
};

export default useTable;
